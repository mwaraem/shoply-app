import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function AdminLayout() {
    const navigate = useNavigate();
    const user = useSelector((s) => s.user?.data);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-display font-semibold text-gray-900 dark:text-white">
                        Admin
                    </h2>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                ? "bg-brand-100 text-brand dark:bg-app-dark dark:text-white"
                                : "text-gray-700 dark:bg-app-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/admin/orders"
                        className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                    ? "bg-brand-50 text-brand dark:bg-app-dark dark:text-white"
                                    : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`
                        }
                    >
                        All orders
                    </NavLink>
                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) => 
                            `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                    ? "bg-brand-50 text-brand-600 dark:bg-app-dark dark:text-white"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                    ? "bg-brand-50 text-brand-600 dark:bg-app-dark dark:text-white"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`
                        }
                    >
                        Customers
                    </NavLink>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-display font-semibold text-brand dark:text-white">
                        Dashboard
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input 
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBoox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </button>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                                {user?.name?.[0]?.toUpperCase() || "A"}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">My account</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}