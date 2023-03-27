import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

export const {  } = counterSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer