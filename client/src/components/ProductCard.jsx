// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product, onAdd }) {
    const id = product._id || product.id;
    return (
        <article className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <a href={`/product/${id}`} className="block">
                <img
                    loading="lazy"
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain bg-slate-50 p-4"
                />
            </a>
            <div className="p-4">
                <a href={`/product/${id}`} className="text-lg font-semibold line-clamp-2">{product.title}</a>
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-brand font-bold">${Number(product.price).toFixed(2)}</p>
                    <button
                        onClick={() => onAdd?.(product)}
                        className="px-3 py-1 bg-brand text-white rounded-md text-sm hover:bg-brand-dark transition"
                        aria-label={`Add ${product.title} to cart`}
                    >
                        Add
                    </button>
                </div>
            </div>
        </article>
    );
}
