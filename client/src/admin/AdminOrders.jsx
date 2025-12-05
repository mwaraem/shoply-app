// client/src/admin/AdminOrders.jsx
import React, { useEffect, useState } from "react";
import api from "../lib/api";
import { Link } from "react-router-dom";

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.get("/admin/orders").then(res => setOrders(res.data)).catch(console.error);
    }, []);

    const updateStatus = async (id, status) => {
        await api.patch(`/admin/orders/${id}/status`, { status });
        setOrders(prev => prev.map(o => o._id === id ? { ...o, status } : o));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="space-y-3">
                {orders.map(o => (
                    <div key={o._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                        <div>
                            <div className="font-semibold">{o.user?.name ?? "Guest"}</div>
                            <div className="text-sm text-slate-500">{o.items.length} items — {new Date(o.createdAt).toLocaleString()}</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1 border rounded">{o.status}</div>
                            <select value={o.status} onChange={(e) => updateStatus(o._id, e.target.value)} className="border p-1 rounded">
                                <option value="created">Created</option>
                                <option value="paid">Paid</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                            <Link to={`/admin/orders/${o._id}`} className="px-3 py-1 bg-gray-100 rounded">View</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
