// src/components/Newsletter.jsx
import React, { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const submit = (e) => { e.preventDefault(); alert(`Thanks — we'll email ${email}`); setEmail(""); };

    return (
        <section className="max-w-6xl mx-auto px-6 mt-12">
            <div className="bg-slate-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold">Subscribe to our newsletter</h4>
                    <p className="text-sm text-slate-600">Get 10% off your first order.</p>
                </div>

                <form onSubmit={submit} className="flex gap-2 w-full md:w-auto">
                    <input
                        required
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="px-4 py-2 border rounded-l-md border-slate-200"
                    />
                    <button className="px-4 py-2 bg-brand text-white rounded-r-md">Subscribe</button>
                </form>
            </div>
        </section>
    );
}
