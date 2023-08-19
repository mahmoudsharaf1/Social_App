import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setPost, setLoading, setError } = postSlice.actions;

export default postSlice.reducer;


