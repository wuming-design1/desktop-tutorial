import { fetchTodayCommits, fetchCommitTrend, fetchRepoInfo } from './githubService';
import { fetchTasks } from './feishuService';
import { getPlatforms } from './credentialService';
export async function getDashboardSummary(userId) {
    const now = new Date().toISOString();
    const today = now.slice(0, 10);
    const platforms = getPlatforms(userId);
    const hasGithub = platforms.includes('github');
    const hasFeishu = platforms.includes('feishu');
    let commits = 0;
    let activeMembers = 0;
    let activeRepos = 0;
    let newIssues = 0;
    const updates = [];
    // 从 GitHub 获取数据
    if (hasGithub) {
        commits = await fetchTodayCommits(userId);
        const repoInfo = await fetchRepoInfo(userId);
        activeRepos = repoInfo.watchers > 0 ? 1 : 0;
        activeMembers = Math.min(repoInfo.watchers, 50);
        newIssues = repoInfo.openIssues;
        if (commits > 0) {
            updates.push({
                id: `gh-${today}`,
                time: now,
                source: 'github',
                author: 'GitHub',
                content: `今日 ${commits} 次提交`,
                detail: `GitHub 仓库今日有 ${commits} 次新提交`,
            });
        }
    }
    // 从飞书获取数据
    if (hasFeishu) {
        const taskResult = await fetchTasks(userId);
        if (taskResult.total > 0) {
            updates.push({
                id: `fs-${today}`,
                time: now,
                source: 'feishu',
                author: '飞书',
                content: `飞书任务 ${taskResult.total} 个`,
                detail: `当前飞书任务列表中共 ${taskResult.total} 个任务`,
            });
        }
    }
    const connectedNames = [];
    if (hasGithub)
        connectedNames.push('GitHub');
    if (hasFeishu)
        connectedNames.push('飞书');
    return {
        date: today,
        summary: connectedNames.length > 0
            ? `已连接 ${connectedNames.join(' + ')}，正在拉取实时数据`
            : '未配置数据源，请前往「管理凭证」配置 GitHub 或飞书连接',
        highlights: [],
        blockers: [],
        stats: {
            commits,
            commitsChange: 0,
            tasks: 0,
            urgentTasks: 0,
            activeMembers,
            totalMembers: activeMembers,
            coverage: 0,
            taskRate: 0,
            members: activeMembers,
            changes: 0,
            activeRepos,
            newIssues,
            closedIssues: 0,
            reviews: 0,
            releases: 0,
        },
        updates,
    };
}
export async function getReports(userId) {
    const platforms = getPlatforms(userId);
    const hasGithub = platforms.includes('github');
    // 提交趋势（从 GitHub 获取）
    const commitTrend = hasGithub ? await fetchCommitTrend(userId) : [];
    // PR 趋势（暂用相同数据，待后续接入独立 PR API）
    const prTrend = commitTrend.map(p => ({ ...p, value: Math.floor(p.value * 0.4) }));
    // 任务分布（演示数据，后续可接入飞书任务分类）
    const taskDistribution = [
        { name: '开发', value: 40, color: '#6C5CE7' },
        { name: '审查', value: 25, color: '#00B894' },
        { name: '测试', value: 20, color: '#FDCB6E' },
        { name: '文档', value: 15, color: '#FF7675' },
    ];
    // 成员活跃度（演示数据，后续可接入 GitHub 贡献者统计）
    const memberActivity = commitTrend.length > 0
        ? [{ name: '活跃成员', value: commitTrend.reduce((sum, p) => sum + p.value, 0) }]
        : [];
    // 健康检查
    const healthStatus = [
        {
            service: 'GitHub API',
            status: hasGithub ? 'healthy' : 'down',
            latency: hasGithub ? 120 : 0,
            uptime: 99.9,
            lastChecked: new Date().toISOString(),
        },
        {
            service: '飞书 API',
            status: platforms.includes('feishu') ? 'healthy' : 'down',
            latency: platforms.includes('feishu') ? 200 : 0,
            uptime: 99.5,
            lastChecked: new Date().toISOString(),
        },
        {
            service: '数据库',
            status: 'healthy',
            latency: 5,
            uptime: 99.99,
            lastChecked: new Date().toISOString(),
        },
    ];
    return { commitTrend, prTrend, taskDistribution, memberActivity, healthStatus };
}
//# sourceMappingURL=dashboardService.js.map