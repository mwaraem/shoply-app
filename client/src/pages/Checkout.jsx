import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { clearCart } from '../features/cart/cartSlice';

const stripePromise = loadStripe('pk_test_51SAoJgR8gITigo6w6JjwdIXyGCQ2gG4vV6Q3MPsRRV0UcGbi5lyuPdlHE5zKYGY4dsG3tQKdwYcheBrHhHJ0qsLF00R65rYt8M');

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const cart = useSelector(s => s.cart);
    const d = useDispatch();

    const pay = async () => {
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: window.location.origin + '/?paid=true' }
        });
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
    const cart = useSelector(s => s.cart);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const shipping = { name: "John", address: "1 Main", city: "NBO", country: "KE", zip: "00100", phone: "+254..." };
                const response = await api.post('/checkout', { items: cart.items, shipping });
                if (response && response.data && response.data.clientSecret) {
                    setClientSecret(response.data.clientSecret);
                } else {
                    alert("Failed to get payment intent. Please check your login and cart.");
                }
            } catch (err) {
                alert("Checkout error: " + (err.response?.data?.error || err.message));
            }
        };
        fetchClientSecret();
    }, [cart.items]);

    const options = {
        clientSecret,
        appearance: {},
    };

    return (
        <div className='mx-auto max-w-3xl px-4 py-8'>
            <h1 className='text-2xl font-bold mb-4'>Checkout</h1>
            {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}