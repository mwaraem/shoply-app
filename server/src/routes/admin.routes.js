import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { isAdmin } from "../middleware/admin.js";
import { getDashboardStats } from "../controllers/dashboard.controller.js";
import { listUsers, updateUserRole } from "../controllers/admin.user.controller.js";
import { listOrders, getOrder, updateOrderStatus } from "../controllers/admin.order.controller.js";

const router = Router();

router.use(protect, isAdmin);
router.get("/dashboard", getDashboardStats);

router.get("/users", listUsers);
router.patch("/users/:id/role", updateUserRole);

router.get("/orders", listOrders);
router.get("/orders/:id", getOrder);
router.patch("/orders/:id/status", updateOrderStatus);

export default router;