import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Not authorized" });
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    };
};

export const requireAdmin = (_req, res, next) => {
    if (_req.user?.role !== "admin")
        return res.status(403).json({
            message: "Admin only"
        });
    next();
};

export const issueToken = (res, user) => {
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === 'production', // set to true in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: '/'
    });
};