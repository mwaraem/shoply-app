import { Router } from 'express';
import Stripe from 'stripe';
import Order from '../models/Order.js'
import { protect } from '../middleware/auth.js';

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/checkout', protect, async (req, res, next) => {
    try {
        const { items, shipping } = req.body;
        const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
        const total = subtotal;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(total * 100),
            currency: "usd",
            automatic_payment_methods: { enabled: true },
            metadata: { userId: req.user.id }
        });

        const order = await Order.create({
            user: req.user.id, items, subtotal, discount: 0, total,
            paymentIntentId: paymentIntent.id, shipping
        });

        res.json({ clientSecret: paymentIntent.client_secret, orderId: order._id });
    } catch (e) { next(e); }
});

router.get("/", protect, async (req, res) => {
    const filter = req.user.role === "admin" ? {} : { user: req.user.id };
    const orders = await Order.find(filter).sort("-createdAt");
    res.json(orders);
});

export default router;
