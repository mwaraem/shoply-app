import { Router } from 'express';
import User from '../models/User.js';
import { issueToken, protect } from "../middleware/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
    const user = await User.create(req.body);
    issueToken(res, user);
    res.json({ id: user._id, name: user.name, email: user.email, role: user.role });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password)))
        return res.status(400).json({ message: "Invalid credentials" });
    issueToken(res, user);
    res.json({ id: user._id, name: user.name, email: user.email, role: user.role });
});

router.post("/logout", (_req, res) => {
    res.clearCookie("token");
    res.json({ ok: true });
});

router.get("/me", protect, async (req, res) => {
    const u = await User.findById(req.user.id);
    res.json({ id: u._id, name: u.name, email: u.email, role: u.role });
});

export default router;
