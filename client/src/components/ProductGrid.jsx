// src/components/ProductGrid.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import api from "../lib/api";

export default function ProductGrid({ limit = 9 }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        api.get("/products")
            .then(res => {
                if (!mounted) return;
                const data = Array.isArray(res.data) ? res.data : (res.data.data || []);
                setProducts(data.slice(0, limit));
            })
            .catch(err => {
                console.error("Products fetch error:", err);
                setProducts([]);
            })
            .finally(() => mounted && setLoading(false));
        return () => { mounted = false; };
    }, [limit]);

    const handleAdd = (product) => {
        // simple placeholder — wire to your cart store / redux
        console.log("add", product);
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 rounded-xl">
                {Array.from({ length: limit }).map((_, i) => (
                    <div key={i} className="animate-pulse bg-slate-100 rounded-lg h-64"></div>
                ))}
            </div>
        );
    }

    return (
        <section className="mt-8 max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Popular products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(p => <ProductCard key={p._id || p.id} product={p} onAdd={handleAdd} />)}
            </div>
        </section>
    );
}
