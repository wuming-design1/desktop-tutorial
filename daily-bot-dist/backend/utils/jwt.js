import jwt from 'jsonwebtoken';
import { env } from '../config/env';
export function signToken(payload) {
    return jwt.sign(payload, env.JWT_SECRET, {
        expiresIn: env.JWT_EXPIRES_IN,
    });
}
export function verifyToken(token) {
    try {
        return jwt.verify(token, env.JWT_SECRET);
    }
    catch {
        return null;
    }
}
export function extractToken(authHeader) {
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return null;
    return authHeader.slice(7);
}
//# sourceMappingURL=jwt.js.map