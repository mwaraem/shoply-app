import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
                <Link to="/" className="text-brand underline">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <section className="min-h-screen p-6 bg-gray-50">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
                <h2 className="text-3xl font-bold mb-6 text-brand">Your Cart</h2>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center justify-between border-b pb-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.qty}
                                    onChange={(e) =>
                                        dispatch(
                                            updateQuantity({ id: item._id, qty: Number(e.target.value) })
                                        )
                                    }
                                    className="w-16 border rounded text-center"
                                />
                                <button
                                    onClick={() => dispatch(removeFromCart(item._id))}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <p className="text-xl font-semibold">
                        Subtotal: <span className="text-brand">${subtotal.toFixed(2)}</span>
                    </p>
                    <button
                        onClick={() => navigate("/checkout")}
                        className="px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </section>
    );
}
