import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    isVisible: true, 
  },
  reducers: {
    toggleMode: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;