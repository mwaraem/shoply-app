import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function RequireAdmin({ children }) {
    const { data, status } = useSelector((s) => s.user);

    if (status === 'loading') return null;           // or a loader
    if (!data) return <Navigate to="/login" replace />;
    if (data.role !== 'admin') return <Navigate to="/" replace />;
    return <Outlet />;
}