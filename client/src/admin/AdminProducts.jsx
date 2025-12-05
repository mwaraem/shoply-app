// client/src/admin/AdminProducts.jsx
import React, { useEffect, useState } from "react";
import api from "../lib/api";
import { Link } from "react-router-dom";

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = () => api.get("/products").then(r => { setProducts(Array.isArray(r.data) ? r.data : r.data.products); setLoading(false); }).catch(() => setLoading(false));

    useEffect(() => { fetchProducts(); }, []);

    const handleDelete = async (id) => {
        if (!confirm("Delete product?")) return;
        await api.delete(`/products/${id}`);
        fetchProducts();
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Link to="/admin/products/new" className="bg-brand text-white px-3 py-1 rounded">Add product</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(p => (
                    <div key={p._id || p.id} className="bg-white p-4 rounded shadow">
                        <img src={p.image || (p.images && p.images[0])} alt={p.title} className="h-40 w-full object-contain mb-2" />
                        <div className="font-semibold">{p.title}</div>
                        <div className="text-sm text-slate-500">${p.price}</div>
                        <div className="mt-3 flex gap-2">
                            <Link to={`/admin/products/${p._id}/edit`} className="px-3 py-1 bg-gray-100 rounded">Edit</Link>
                            <button onClick={() => handleDelete(p._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
