interface PushPreview {
    date: string;
    stats: {
        label: string;
        value: string;
    }[];
    summary: string;
    highlights: string[];
}
/** 从真实数据生成推送预览 */
export declare function buildPushPreview(userId: string): Promise<PushPreview>;
/** 测试连接：发送一条简单的测试消息 */
export declare function testPush(userId: string): Promise<{
    success: boolean;
    error?: string;
}>;
/** 推送每日报告到飞书群 */
export declare function pushDailyReport(userId: string): Promise<{
    success: boolean;
    preview: PushPreview | null;
    error?: string;
}>;
export {};
//# sourceMappingURL=pushService.d.ts.map