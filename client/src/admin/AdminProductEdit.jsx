// client/src/admin/AdminProductEdit.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/api";

export default function AdminProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: "", description: "", price: 0, image: "" });
    useEffect(() => {
        if (id && id !== "new") {
            api.get(`/products/${id}`).then(r => setForm(r.data)).catch(() => { });
        }
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        if (id === "new") {
            await api.post("/products", form);
        } else {
            await api.put(`/products/${id}`, form);
        }
        navigate("/admin/products");
    };

    return (
        <form onSubmit={handleSave} className="bg-white p-6 rounded shadow max-w-2xl">
            <h1 className="text-xl font-bold mb-4">{id === "new" ? "Create" : "Edit"} product</h1>

            <label className="block mb-2">Title<input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full border p-2 rounded" /></label>
            <label className="block mb-2">Price<input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="w-full border p-2 rounded" /></label>
            <label className="block mb-2">Image URL<input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="w-full border p-2 rounded" /></label>
            <label className="block mb-2">Description<textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full border p-2 rounded" /></label>

            <div className="mt-4 flex gap-2">
                <button type="submit" className="bg-brand text-white px-4 py-2 rounded">Save</button>
                <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Cancel</button>
            </div>
        </form>
    );
}
