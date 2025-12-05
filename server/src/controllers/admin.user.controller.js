import User from "../models/User.js";

export const listUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).select("-password").sort({ createdAt: -1 }).lean();
        res.json(users);
    } catch (err) { next(err); }
};

export const updateUserRole = async (req, res, next) => {
    try {
        const { role } = req.body;
        const user = await User.findById(req.params.id, { role }, { new: true }).select("-password");
        res.json(user);
    } catch (err) { next(err); }
}