import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    // Calculate cart count from Redux
    const count = useSelector((state) =>
        state.cart.items.reduce((total, item) => total + item.qty, 0)
    );

    const [q, setQ] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (q.trim()) {
            navigate(`/?q=${encodeURIComponent(q)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b shadow-sm">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
                {/* Logo / Brand */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    Shoply
                </Link>

                {/* Search Box */}
                <form onSubmit={handleSearch} className="flex-1">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </form>

                {/* Cart Button */}
                <Link
                    to="/cart"
                    className="relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Cart
                    {count > 0 && (
                        <span className="absolute -right-2 -top-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white text-xs font-bold">
                            {count}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}
