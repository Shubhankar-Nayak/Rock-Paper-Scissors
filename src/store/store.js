import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';

const store = configureStore({
  reducer: {
    rules: rulesReducer,
  },
});

export default store;
