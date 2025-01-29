import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {

        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Unauthorized Access", success: false });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ message: "Unauthorized Access", success: false });

        req.userId = decoded.id;
        console.log(req.userId)
        next();

    } catch (err) {
        res.status(401).json({ message: "Unauthorized Access", success: false });
    }
};