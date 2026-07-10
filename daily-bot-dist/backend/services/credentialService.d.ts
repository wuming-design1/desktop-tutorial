export declare const PLATFORM_KEYS: Record<string, string[]>;
export declare function getCredentialsForUser(userId: string, platform?: string): Record<string, string>;
export declare function saveCredentials(userId: string, platform: string, creds: Record<string, string>): void;
export declare function saveSingleCredential(userId: string, platform: string, key: string, value: string): void;
export declare function removeCredential(userId: string, platform: string, key: string): void;
export declare function removePlatform(userId: string, platform: string): void;
export declare function getPlatforms(userId: string): string[];
export declare function hasCredentials(userId: string, platform: string): boolean;
//# sourceMappingURL=credentialService.d.ts.map