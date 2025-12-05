import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Product from "./pages/Product";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import ProductGrid from "./components/ProductGrid";

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;