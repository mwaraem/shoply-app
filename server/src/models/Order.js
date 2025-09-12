import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    variant: String,
    qty: Number,
    price: Number,
    image: String
}, { _id: false });


const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [itemSchema],
    subtotal: Number,
    discount: Number,
    total: Number,
    status: { type: String, enum: ["created", "paid", "shipped", "delivered", "canceled"], default: "created" },
    shipping: {
        name: String,
        address: String,
        city: String,
        country: String,
        zip: String,
        phone: String
    }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);