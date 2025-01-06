import { createSlice } from '@reduxjs/toolkit'

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value = Math.max(state.value - 1, 0)
    }
  },
})

export const { increment, decrement } = scoreSlice.actions

export default scoreSlice.reducer