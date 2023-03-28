import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  totalPrice: number;
  items: any;
}

const initialState: CartState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj: any) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum: number, obj: any) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj: any) => obj.id !== action.payload);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj: any) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },

    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
