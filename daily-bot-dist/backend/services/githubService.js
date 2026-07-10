import { getCredentialsForUser } from './credentialService';
import { execSync } from 'child_process';
import { existsSync } from 'fs';
function ghHeaders(token) {
    return {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    };
}
function parseRepo(repo) {
    const parts = repo.split('/');
    if (parts.length !== 2)
        return null;
    return { owner: parts[0], repoName: parts[1] };
}
export async function fetchCommitTrend(userId) {
    const creds = getCredentialsForUser(userId, 'github');
    const token = creds['GITHUB_TOKEN'];
    const repo = creds['GITHUB_REPO'];
    if (!token || !repo)
        return [];
    const parsed = parseRepo(repo);
    if (!parsed)
        return [];
    try {
        const since = new Date(Date.now() - 7 * 86400000).toISOString();
        const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repoName}/commits?since=${since}&per_page=100`, { headers: ghHeaders(token) });
        if (!res.ok)
            return [];
        const commits = await res.json();
        const dailyCounts = {};
        for (const commit of commits) {
            const date = commit.commit.author.date.slice(0, 10);
            dailyCounts[date] = (dailyCounts[date] || 0) + 1;
        }
        const result = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(Date.now() - i * 86400000);
            const dateStr = d.toISOString().slice(0, 10);
            result.push({ date: dateStr, value: dailyCounts[dateStr] || 0 });
        }
        return result;
    }
    catch {
        return [];
    }
}
export async function fetchTodayCommits(userId) {
    const creds = getCredentialsForUser(userId, 'github');
    const token = creds['GITHUB_TOKEN'];
    const repo = creds['GITHUB_REPO'];
    if (!token || !repo)
        return 0;
    const parsed = parseRepo(repo);
    if (!parsed)
        return 0;
    try {
        const today = new Date().toISOString().slice(0, 10);
        const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repoName}/commits?since=${today}T00:00:00Z&per_page=100`, { headers: ghHeaders(token) });
        if (!res.ok)
            return 0;
        const commits = await res.json();
        return Array.isArray(commits) ? commits.length : 0;
    }
    catch {
        return 0;
    }
}
export async function fetchRepoInfo(userId) {
    const creds = getCredentialsForUser(userId, 'github');
    const token = creds['GITHUB_TOKEN'];
    const repo = creds['GITHUB_REPO'];
    if (!token || !repo)
        return { openIssues: 0, watchers: 0 };
    const parsed = parseRepo(repo);
    if (!parsed)
        return { openIssues: 0, watchers: 0 };
    try {
        const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repoName}`, { headers: ghHeaders(token) });
        if (!res.ok)
            return { openIssues: 0, watchers: 0 };
        const data = await res.json();
        return {
            openIssues: data.open_issues_count || 0,
            watchers: data.watchers_count || 0,
        };
    }
    catch {
        return { openIssues: 0, watchers: 0 };
    }
}
/** 获取默认分支名称 */
async function getDefaultBranch(owner, repoName, token) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
        headers: ghHeaders(token),
    });
    if (!res.ok)
        throw new Error('无法获取仓库信息');
    const data = await res.json();
    return data.default_branch || 'main';
}
/** 获取默认分支最新 commit SHA */
async function getLatestSha(owner, repoName, branch, token) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/refs/heads/${branch}`, { headers: ghHeaders(token) });
    if (!res.ok)
        throw new Error(`无法获取分支 ${branch} 的信息`);
    const data = await res.json();
    return data.object.sha;
}
/** 创建 Git Blob */
async function createBlob(owner, repoName, content, token) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/blobs`, {
        method: 'POST',
        headers: ghHeaders(token),
        body: JSON.stringify({ content, encoding: 'utf-8' }),
    });
    if (!res.ok)
        throw new Error('创建 Blob 失败');
    const data = await res.json();
    return data.sha;
}
/** 创建 Git Tree */
async function createTree(owner, repoName, baseSha, files, token) {
    const treeItems = await Promise.all(files.map(async (f) => {
        const blobSha = await createBlob(owner, repoName, f.content, token);
        return { path: f.path, mode: '100644', type: 'blob', sha: blobSha };
    }));
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/trees`, {
        method: 'POST',
        headers: ghHeaders(token),
        body: JSON.stringify({ base_tree: baseSha, tree: treeItems }),
    });
    if (!res.ok)
        throw new Error('创建 Tree 失败');
    const data = await res.json();
    return data.sha;
}
/** 创建 Commit */
async function createCommit(owner, repoName, treeSha, parentSha, message, token) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/commits`, {
        method: 'POST',
        headers: ghHeaders(token),
        body: JSON.stringify({ message, tree: treeSha, parents: [parentSha] }),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || '创建 Commit 失败');
    }
    const data = await res.json();
    return data.sha;
}
/** 创建/更新分支引用 */
async function updateBranchRef(owner, repoName, branch, sha, token) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/refs`, {
        method: 'POST',
        headers: ghHeaders(token),
        body: JSON.stringify({ ref: `refs/heads/${branch}`, sha }),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || '创建分支引用失败');
    }
}
/** 创建 Pull Request */
async function createPR(owner, repoName, title, body, head, base, token) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/pulls`, {
        method: 'POST',
        headers: ghHeaders(token),
        body: JSON.stringify({ title, body, head, base }),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || '创建 PR 失败');
    }
    const data = await res.json();
    return { number: data.number, html_url: data.html_url };
}
// ===== 模式一：上传文件创建 PR =====
export async function createPRFromFiles(userId, options) {
    const creds = getCredentialsForUser(userId, 'github');
    const token = creds['GITHUB_TOKEN'];
    const repo = creds['GITHUB_REPO'];
    if (!token || !repo)
        throw new Error('未配置 GitHub 凭证');
    const parsed = parseRepo(repo);
    if (!parsed)
        throw new Error('仓库格式无效，应为 owner/repo');
    const { owner, repoName } = parsed;
    const baseBranch = await getDefaultBranch(owner, repoName, token);
    const headBranch = options.branch || `pr-upload-${Date.now().toString(36)}`;
    const baseSha = await getLatestSha(owner, repoName, baseBranch, token);
    // 创建 tree -> commit -> branch ref -> PR
    const treeSha = await createTree(owner, repoName, baseSha, options.files, token);
    const commitSha = await createCommit(owner, repoName, treeSha, baseSha, options.title, token);
    await updateBranchRef(owner, repoName, headBranch, commitSha, token);
    const pr = await createPR(owner, repoName, options.title, options.body, headBranch, baseBranch, token);
    return { ...pr, branch: headBranch };
}
// ===== 模式二：Git 暂存区创建 PR =====
export async function createPRFromStaging(userId, options) {
    const creds = getCredentialsForUser(userId, 'github');
    const token = creds['GITHUB_TOKEN'];
    const repo = creds['GITHUB_REPO'];
    if (!token || !repo)
        throw new Error('未配置 GitHub 凭证');
    const parsed = parseRepo(repo);
    if (!parsed)
        throw new Error('仓库格式无效');
    const { owner, repoName } = parsed;
    const repoPath = options.repoPath;
    // 检查本地仓库路径是否存在
    if (!existsSync(repoPath)) {
        throw new Error(`本地仓库路径不存在: ${repoPath}`);
    }
    if (!existsSync(`${repoPath}/.git`)) {
        throw new Error(`${repoPath} 不是一个 Git 仓库`);
    }
    // 获取暂存区文件列表
    let stagedFiles = [];
    try {
        const output = execSync('git diff --cached --name-only', { cwd: repoPath, encoding: 'utf-8' });
        stagedFiles = output.trim().split('\n').filter(Boolean);
    }
    catch {
        throw new Error('无法读取 Git 暂存区');
    }
    if (stagedFiles.length === 0) {
        throw new Error('暂存区为空，请先使用 git add 添加文件');
    }
    // 读取每个暂存文件的内容（使用 git show :path）
    const files = [];
    for (const filePath of stagedFiles) {
        try {
            const content = execSync(`git show ":${filePath}"`, { cwd: repoPath, encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
            files.push({ path: filePath, content });
        }
        catch {
            throw new Error(`无法读取暂存文件: ${filePath}`);
        }
    }
    const baseBranch = await getDefaultBranch(owner, repoName, token);
    const headBranch = options.branch || `pr-staging-${Date.now().toString(36)}`;
    const baseSha = await getLatestSha(owner, repoName, baseBranch, token);
    const treeSha = await createTree(owner, repoName, baseSha, files, token);
    const commitMsg = options.title || `chore: PR from staging area (${stagedFiles.length} files)`;
    const commitSha = await createCommit(owner, repoName, treeSha, baseSha, commitMsg, token);
    await updateBranchRef(owner, repoName, headBranch, commitSha, token);
    const pr = await createPR(owner, repoName, options.title, options.body, headBranch, baseBranch, token);
    return { ...pr, branch: headBranch, files: stagedFiles };
}
//# sourceMappingURL=githubService.js.map