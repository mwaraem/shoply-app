import React from 'react'
import HeroImage from '../assets/hero.jpg';
import ProductCard from './ProductCard';
import FeaturedProduct from '../assets/hero-product.jpg';

export default function Hero() {
    return (
        <section className="relative bg-[url('../assets/hero.jpg')] bg-cover bg-center min-h-[220px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 flex items-center justify-between">
                <div className="max-w-xl text-white">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">The Biggest <span className="text-brand">Sale</span></h1>
                    <p className="mt-4 text-lg opacity-90">Special offers on trending items. Limited time only.</p>
                    <div className="mt-6 flex gap-3">
                        <a href="featured" className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium shadow-soft">
                            Shop Now
                        </a>
                        <a href="featured" className="inline-flex items-center px-5 py-3 border border-white/30 rounded-lg text-white/90">Explore</a>
                    </div>
                </div>

                <div className="hidden lg:block w-[320px] rounded-lg overflow-hidden shadow-soft">
                    {/* small static hero product card for visual interest */}
                    <img src={FeaturedProduct} alt="Featured product" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};
