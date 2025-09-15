import { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../lib/api';
import { setUser } from '../features/auth/userSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const { data } = await api.post('/auth/register', { name, email, password });
            dispatch(setUser(data.user));
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <section className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
            <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-8'>
                <h2 className='text-3xl font-bold text-center mb-6 text-brand'>
                    Create Account
                </h2>
                {error && (
                    <p className='text-red-500 text-center mb-4'>{error}</p>
                )}
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div>
                        <label className='blocj text-sm font-medium mb-1'>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Password</label>
                        <input type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-brand text-white py-2 rounded-lg hover:bg-brand/90'
                    >
                        Register
                    </button>
                </form>
                <p className='mt-4 text-center text-sm'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-brand font-medium hover:underline'>
                        Sign In
                    </Link>
                </p>
            </div>
        </section>
    );
}