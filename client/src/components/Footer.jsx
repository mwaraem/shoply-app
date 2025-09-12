// src/components/Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="mt-16 bg-white border-t py-8">
            <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex flex-col md:flex-row justify-between">
                <div>© {new Date().getFullYear()} Shoply. All rights reserved.</div>
                <div className="space-x-4">
                    <a href="/terms" className="hover:underline">Terms</a>
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
}
