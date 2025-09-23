import { createSlice } from '@reduxjs/toolkit';

const initial = { items: [], subtotal: 0 };
const slice = createSlice({
    name: 'cart',
    initialState: initial,
    reducers: {
        addToCart: (s, { payload }) => {
            const idx = s.items.findIndex(i => i._id === payload._id);
            if (idx > -1) s.items[idx].qty += payload.qty;
            else s.items.push(payload);
            s.subtotal = s.items.reduce((a, i) => a + i.qty * i.price, 0);
        },
        removeFromCart: (s, { payload }) => {
            s.items = s.items.filter(i => i._id !== payload);
            s.subtotal = s.items.reduce((a, i) => a + i.qty * i.price, 0);
        },
        updateQuantity: (s, { payload }) => {
            const idx = s.items.findIndex(i => i._id === payload.id);
            if (idx > -1) {
                s.items[idx].qty = payload.qty;
                s.subtotal = s.items.reduce((a, i) => a + i.qty * i.price, 0);
            }
        },
        clearCart: () => initial
    }
});
export const { addToCart, removeFromCart, clearCart, updateQuantity } = slice.actions;
export default slice.reducer;