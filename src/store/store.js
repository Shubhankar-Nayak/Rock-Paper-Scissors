import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';
import scoreReducer from './scoreSlice';

const store = configureStore({
  reducer: {
    rules: rulesReducer,
    score: scoreReducer,
  },
});

export default store;
