// server/models/Product.js
import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
