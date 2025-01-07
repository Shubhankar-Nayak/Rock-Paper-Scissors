import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';
import scoreReducer from './scoreSlice';
import modeReducer from './modeSlice';

const store = configureStore({
  reducer: {
    rules: rulesReducer,
    score: scoreReducer,
    mode: modeReducer,
  },
});

export default store;
