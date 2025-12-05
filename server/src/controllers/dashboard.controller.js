// server/src/controllers/dashboard.controller.js
import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

/**
 * GET /api/dashboard
 * Admin-only: return aggregate stats and latest items
 */
export const getDashboardStats = async (req, res, next) => {
    try {
        const users = await User.countDocuments();
        const products = await Product.countDocuments();
        const orders = await Order.countDocuments();

        const recentOrders = await Order.find({})
            .sort({ createdAt: -1 })
            .limit(8)
            .populate("user", "name email")
            .lean();

        const recentUsers = await User.find({}).sort({ createdAt: -1 }).limit(8).lean();

        // daily orders for last 14 days (simple aggregation)
        const days = 14;
        const start = new Date();
        start.setDate(start.getDate() - days);
        const ordersAgg = await Order.aggregate([
            { $match: { createdAt: { $gte: start } } },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" },
                    },
                    total: { $sum: 1 },
                    revenue: { $sum: "$total" },
                },
            },
            { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
        ]);

        res.json({ stats: { users, products, orders }, recentOrders, recentUsers, ordersAgg });
    } catch (err) {
        next(err);
    }
};
