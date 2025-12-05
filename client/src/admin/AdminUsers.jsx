// client/src/admin/AdminUsers.jsx
import React, { useEffect, useState } from "react";
import api from "../lib/api";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => { api.get("/admin/users").then(r => setUsers(r.data)).catch(console.error); }, []);

    const changeRole = async (id, role) => {
        await api.patch(`/admin/users/${id}/role`, { role });
        setUsers(prev => prev.map(u => u._id === id ? { ...u, role } : u));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <table className="w-full bg-white rounded shadow">
                <thead className="text-left">
                    <tr><th className="px-4 py-2">Name</th><th>Email</th><th>Role</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u._id} className="border-t">
                            <td className="px-4 py-2">{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                                {u.role !== "admin" ? <button onClick={() => changeRole(u._id, "admin")} className="px-3 py-1 bg-brand text-white rounded">Promote</button> :
                                    <button onClick={() => changeRole(u._id, "customer")} className="px-3 py-1 bg-gray-200 rounded">Demote</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
