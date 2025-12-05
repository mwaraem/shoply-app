// client/src/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../lib/api";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function AdminDashboard() {
    const [data, setData] = useState(null);
    useEffect(() => {
        api.get("/admin/dashboard")
            .then(res => setData(res.data))
            .catch(console.error);
    }, []);

    if (!data) return <div>Loading...</div>;

    // convert aggregation into chart-friendly array
    const chartData = (data.ordersAgg || []).map(d => {
        const { _id } = d;
        const label = `${_id.month}/${_id.day}`;
        return { label, count: d.total, revenue: d.revenue };
    });

    const { stats, recentOrders, recentUsers } = data;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-sm text-slate-500">Users</div>
                    <div className="text-3xl font-bold">{stats.users}</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-sm text-slate-500">Products</div>
                    <div className="text-3xl font-bold">{stats.products}</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-sm text-slate-500">Orders</div>
                    <div className="text-3xl font-bold">{stats.orders}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-3">Orders / Revenue (last days)</h3>
                    <div style={{ width: "100%", height: 240 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="label" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="count" stroke="#06b6d4" name="Orders" />
                                <Line type="monotone" dataKey="revenue" stroke="#0891b2" name="Revenue" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-3">Recent Orders</h3>
                    <ul className="space-y-3">
                        {recentOrders.map(o => (
                            <li key={o._id} className="p-2 border rounded">
                                <div className="flex justify-between">
                                    <div><strong>{o.user?.name ?? "Guest"}</strong><div className="text-sm text-slate-500">{o.items.length} items</div></div>
                                    <div className="text-sm">{new Date(o.createdAt).toLocaleString()}</div>
                                </div>
                                <div className="text-right mt-1 font-semibold">${o.total?.toFixed?.(2) ?? "0.00"}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-3">Recent Users</h3>
                    <ul>
                        {recentUsers.map(u => <li key={u._id} className="py-2 border-b">{u.name} <div className="text-sm text-slate-500">{u.email}</div></li>)}
                    </ul>
                </div>
                {/* Add other admin widgets here */}
            </div>
        </div>
    );
}
