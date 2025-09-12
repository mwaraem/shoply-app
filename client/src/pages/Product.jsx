import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "../lib/api";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded mb-4" />
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add to Cart</button>
        </div>
    );
}
