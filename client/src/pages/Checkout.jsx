import { useSelector, useDispatch } from 'react-redux';
import { api } from '../lib/api';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { clearCart } from '../features/cart/cartSlice';

const stripePromise = loadStripe('pk_test_51N4Y2KJH3b0qQ6zYpX0mX4X6k3JZp1g7x8y9z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z');

function CheckoutForm() {
    const stripe = useStripe(); const elements = useElements();
    const cart = useSelector(s => s.cart);
    const d = useDispatch();

    const pay = async () => {
        const shipping = { name: "John", address: "1 Main", city: "NBO", country: "KE", zip: "00100", phone: "+254..." };
        const { data } = await api.post('/orders/checkout', { items: cart.items, shipping });
        const { error } = await stripe.confirmPayment({ elements, confirmParams: { return_url: window.location.origin + '/?paid=true' } });
        if (!error) d(clearCart());
        else alert(error.message);
    };

    return (
        <div className='card max-w-xl mx-auto space-y-4'>
            <PaymentElement />
            <button onClick={pay} className='btn-primary w-full'>Pay</button>
        </div>
    );
}

export default function Checkout() {
    return (
        <div className='mx-auto max-w-3xl px-4 py-8'>
            <h1 className='text-2xl font-bold mb-4'>Checkout</h1>
            <Elements stripe={stripePromise} options={{ appearance: {} }}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};