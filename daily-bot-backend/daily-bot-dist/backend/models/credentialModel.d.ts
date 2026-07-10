export interface CredentialRow {
    id: number;
    user_id: string;
    platform: string;
    key: string;
    value: string;
    created_at: string;
    updated_at: string;
}
export declare function saveCredential(userId: string, platform: string, key: string, plainValue: string): void;
export declare function saveCredentialsBatch(userId: string, platform: string, creds: Record<string, string>): void;
export declare function getCredentials(userId: string, platform?: string): Record<string, string>;
export declare function deleteCredential(userId: string, platform: string, key: string): void;
export declare function deletePlatformCredentials(userId: string, platform: string): void;
export declare function getUserPlatforms(userId: string): string[];
//# sourceMappingURL=credentialModel.d.ts.map