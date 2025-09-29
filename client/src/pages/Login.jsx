import { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../lib/api';
import { setUser } from '../features/auth/userSlice';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const { data } = await api.post('/auth/login', { email, password });
            console.log('Login response:', data);
            dispatch(setUser(data));
            navigate('/'); // redirect to home page after login
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <section className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
            <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-8'>
                <h2 className='text-3xl font-bold text-center mb-6 text-brand'>
                    Sign In
                </h2>
                {error && (
                    <p className='text-red-500 text-center mb-4'>{error}</p>
                )}
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-brand text-white py-2 rounded-lg hover:bg-brand/90'>
                        Login
                    </button>
                </form>
                <p className='mt-4 text-center text-sm'>
                    Don't have an account?{" "}
                    <Link to="/register" className='text-brand font-medium hover:underline'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </section>
    );
}