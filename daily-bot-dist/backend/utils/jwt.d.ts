export interface JwtPayload {
    userId: string;
    email: string;
    role: string;
}
export declare function signToken(payload: JwtPayload): string;
export declare function verifyToken(token: string): JwtPayload | null;
export declare function extractToken(authHeader?: string): string | null;
//# sourceMappingURL=jwt.d.ts.map