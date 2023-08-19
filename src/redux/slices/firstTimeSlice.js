import { createSlice } from '@reduxjs/toolkit';






const initialState = {
  isFirstTime: true,
};

export const firstTimeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setFirstTime: (state, action) => {
      state.isFirstTime = action.payload;
    },
  },
});

const { setFirstTime } = firstTimeSlice.actions;

export { setFirstTime };
export default firstTimeSlice.reducer;
