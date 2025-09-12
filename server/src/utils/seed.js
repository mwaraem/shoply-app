// backend/seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import Product from "../models/Product.js";
import slugify from "slugify";

dotenv.config();

const seedProducts = async () => {
    try {
        // Connect to DB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");

        // Clear old products
        await Product.deleteMany();
        console.log("Existing products cleared");

        // Fetch from Fake Store API
        const { data } = await axios.get("https://fakestoreapi.com/products");

        // Map API data to schema
        const products = data.map(p => ({
            title: p.title,
            slug: slugify(p.title, { lower: true }), // generate unique slug
            price: p.price,
            description: p.description,
            image: p.image,
            category: p.category
        }));

        // Insert into DB
        await Product.insertMany(products);
        console.log(`Seeded ${products.length} products into database!`);

        process.exit();
    } catch (err) {
        console.error("Seeding error:", err.message);
        process.exit(1);
    }
};

seedProducts();
