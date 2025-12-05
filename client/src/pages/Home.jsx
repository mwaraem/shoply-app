// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import ProductGrid from "../components/ProductGrid";
import PromoStrip from "../components/PromoStrip";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";


export default function Home() {
    return (
        <>
            <Hero />
            {/* <FeaturedCategories /> */}
            <ProductCard />
            <ProductGrid />
            <PromoStrip />
            <Newsletter />
            <Footer />
        </>
    );
}
