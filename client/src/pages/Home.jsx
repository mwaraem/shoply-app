// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import ProductGrid from "../components/ProductGrid";
import PromoStrip from "../components/PromoStrip";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedCategories />
            <ProductGrid limit={9} />
            <PromoStrip />
            <Newsletter />
            <Footer />
        </>
    );
}
