import type { User } from '../utils/types';
export interface UserRow {
    id: string;
    username: string;
    email: string;
    password: string;
    avatar: string | null;
    role: 'admin' | 'member' | 'viewer';
    settings: string;
    created_at: string;
    last_login_at: string;
}
export declare function rowToUser(row: UserRow): User;
export declare function findUserByEmail(email: string): UserRow | undefined;
export declare function findUserById(id: string): UserRow | undefined;
export declare function insertUser(user: UserRow): void;
export declare function updateLastLogin(email: string): void;
export declare function updateUserSettings(email: string, settings: string): void;
export declare function updateUserRole(email: string, role: string): void;
export declare function updateUserPassword(email: string, passwordHash: string): void;
export declare function deleteUserByEmail(email: string): void;
export declare function listAllUsers(): UserRow[];
export declare function countAdmins(): number;
//# sourceMappingURL=userModel.d.ts.map