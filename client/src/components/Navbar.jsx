import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../features/auth/userSlice";
import api from "../lib/api";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const count = useSelector(s => s.cart.items.reduce((a, i) => a + i.qty, 0));
    const user = useSelector(s => s.user.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const handleSearch = e => { e.preventDefault(); if (q.trim()) navigate(`/?q=${encodeURIComponent(q)}`); };
    const { theme, toggleTheme } = useTheme();

    const logout = async () => { await api.post("/auth/logout"); dispatch(setUser(null)); navigate("/"); };
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
                <Link to="/" className="text-xl font-bold text-brand">Shoply</Link>
                <form onSubmit={handleSearch} className="flex-1">
                    <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="w-full border rounded-md px-3 py-2" />
                </form>

                <div className="flex items-center gap-3">
                    {user ? (
                        <>
                            <span className="text-sm">Hi {user.name}</span>
                            <button onClick={logout} className="text-sm text-slate-600">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="text-sm text-slate-600">Sign in</Link>
                    )}

                    <Link to="/cart" className="relative px-4 py-2 bg-brand text-white">
                        Cart
                        {count > 0 && <span className="absolute -right-2 top-2 h-5 w-5 rounded-full bg-red-600 text-xs flex items-center justify-center">{count}</span>}
                    </Link>
                </div>
                <button 
                    onClick={toggleTheme}
                    className={`px-3 py-2 rounded-xl border transition ${
                        theme === 'dark'
                          ? 'bg-brand text-white border-brand'
                          : 'bg-white text-brand border-brand'
                    }`}
                    
                >    
                    {theme === 'dark' ? '🌞' : '🌙'}
                </button>
            </div>
        </header>
    )
}