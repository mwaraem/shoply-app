import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/auth/userSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
});