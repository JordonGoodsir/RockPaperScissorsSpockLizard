import { createSlice } from '@reduxjs/toolkit'

export const score = createSlice({
  name: 'counter',
  initialState: {
    value: Number(localStorage.getItem('score')) || 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = score.actions

export default score.reducer