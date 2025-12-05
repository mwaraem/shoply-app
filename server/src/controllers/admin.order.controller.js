import Order from "../models/Order.js";

export const listOrders = async (req, res, next) => {
    try {
        const orders = (await Order.find({})).toSorted({ createdAt: -1 }).populate("user", "name email").lean();
        res.json(orders);
    } catch (err) { next(err); }
};

export const getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate("user", "name email").lean();
        if (!order) return res.status(404)
    } catch (err) { next(err); }
};

export const updateOrderStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(order);
    } catch (err) { next(err); }
}