// client/src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

/**
 * Robust ProductCard:
 * - Guard against missing product
 * - Use Link (react-router) for navigation (no full reload)
 * - Prevent parent Link from stealing Add clicks
 * - Normalize payload and fallback to dispatch(addToCart) if no onAdd prop
 */
export default function ProductCard({ product, onAdd }) {
    const dispatch = useDispatch();

    if (!product) return null; // defensive guard while data is loading

    const id = product._id ?? product.id ?? "";

    const makePayload = () => ({
        _id: id,
        title: product.title ?? product.name ?? "Untitled",
        price: Number(product.price ?? product.unit_price ?? 0),
        image: product.image ?? (product.images && product.images[0]) ?? "",
        qty: 1,
        variantSku: product.variantSku ?? null,
    });

    const handleAdd = (e) => {
        // avoid navigation or parent handlers stealing the click
        if (e) {
            e.stopPropagation();
            if (typeof e.preventDefault === "function") e.preventDefault();
        }

        const payload = makePayload();

        // Prefer parent's handler if provided; else dispatch directly
        if (typeof onAdd === "function") {
            try {
                onAdd(payload);
            } catch (err) {
                console.error("onAdd failed; falling back to dispatch:", err);
                dispatch(addToCart(payload));
            }
        } else {
            dispatch(addToCart(payload));
        }

        // dev helper: inspect window.__lastAddToCart in console
        if (typeof window !== "undefined") window.__lastAddToCart = payload;
    };

    return (
        <article className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden relative">
            {/* Link only around image/title so Add button is not inside the link */}
            <Link to={`/products/${id}`} className="block">
                <img
                    loading="lazy"
                    src={product.image ?? (product.images && product.images[0])}
                    alt={product.title ?? product.name ?? "Product image"}
                    className="w-full h-48 object-contain bg-slate-50 p-4"
                />
            </Link>

            <div className="p-4">
                <Link to={`/products/${id}`} className="text-lg font-semibold line-clamp-2 block mb-2">
                    {product.title ?? product.name ?? "Untitled product"}
                </Link>

                <div className="mt-2 flex items-center justify-between">
                    <p className="text-brand font-bold">${(Number(product.price) || 0).toFixed(2)}</p>

                    <button
                        type="button"
                        onClick={handleAdd}
                        aria-label={`Add ${product.title ?? "product"} to cart`}
                        className="px-3 py-1 bg-brand text-white rounded-md text-sm hover:bg-brand-dark transition"
                        style={{ pointerEvents: "auto", position: "relative", zIndex: 20 }} // temporary safety
                    >
                        Add
                    </button>
                </div>
            </div>
        </article>
    );
}
