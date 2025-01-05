import { createSlice } from '@reduxjs/toolkit';

const rulesSlice = createSlice({
  name: 'rules',
  initialState: {
    isVisible: false, 
  },
  reducers: {
    toggleRules: (state) => {
      state.isVisible = !state.isVisible;
    },
    showRules: (state) => {
      state.isVisible = true;
    },
    hideRules: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleRules, showRules, hideRules } = rulesSlice.actions;

export default rulesSlice.reducer;
