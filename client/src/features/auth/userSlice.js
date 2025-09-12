import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../lib/api';

export const fetchMe = createAsyncThunk('user/fetchMe', async () => (await api.get('/auth/me')).data);
const slice = createSlice({
    name: 'user',
    initialState: { data: null, status: 'idle' },
    reducers: { logout: (s) => { s.data = null; }, setUser: (s, action) => { s.data = action.payload; } },
    extraReducers: (b) => {
        b.addCase(fetchMe.pending, (s) => { s.status = 'loading'; })
            .addCase(fetchMe.fulfilled, (s, a) => { s.data = a.payload; s.status = 'succeeded'; })
            .addCase(fetchMe.rejected, (s) => { s.status = 'failed'; });
    }
});
export const { logout, setUser } = slice.actions;
export default slice.reducer;
