import type { User, AuthResponse, LoginRequest, RegisterRequest } from '../utils/types';
export declare function register(req: RegisterRequest): Promise<AuthResponse>;
export declare function login(req: LoginRequest): Promise<AuthResponse>;
export declare function getMe(userId: string): User | null;
export declare function refreshTokenInternal(userId: string, email: string, role: string): {
    token: string;
};
export declare function updateSettings(email: string, settings: Record<string, unknown>): User | null;
export declare function listUsers(): User[];
export declare function deleteUser(email: string): void;
export declare function resetPassword(email: string, newPassword: string): void;
export declare function changeRole(email: string, role: string): User | null;
export declare function seedAdmin(): Promise<void>;
//# sourceMappingURL=authService.d.ts.map