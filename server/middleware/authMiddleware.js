import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_demo_key_change_in_production';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // Bearer <token>
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access token required' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token' });
        req.user = user;
        next();
    });
};

export const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.user) return res.status(401).json({ error: 'Not authenticated' });

        // Role hierarchy check or exact match
        if (req.user.role !== role) {
            if (role === 'admin' && req.user.role !== 'admin') {
                return res.status(403).json({ error: `Access denied. Requires ${role} role.` });
            }
            // Specific logic: Doctor can maybe access Staff routes? Strict for now as requested.
            return res.status(403).json({ error: `Access denied. Requires ${role} role.` });
        }
        next();
    };
};
