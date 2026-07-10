import type { TrendPoint } from '../utils/types';
export declare function fetchCommitTrend(userId: string): Promise<TrendPoint[]>;
export declare function fetchTodayCommits(userId: string): Promise<number>;
export declare function fetchRepoInfo(userId: string): Promise<{
    openIssues: number;
    watchers: number;
}>;
export declare function createPRFromFiles(userId: string, options: {
    title: string;
    body: string;
    branch: string;
    files: {
        path: string;
        content: string;
    }[];
}): Promise<{
    number: number;
    html_url: string;
    branch: string;
}>;
export declare function createPRFromStaging(userId: string, options: {
    title: string;
    body: string;
    branch: string;
    repoPath: string;
}): Promise<{
    number: number;
    html_url: string;
    branch: string;
    files: string[];
}>;
//# sourceMappingURL=githubService.d.ts.map