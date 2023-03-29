import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CreateFormState {
  formList: any;
}

const initialState: CreateFormState = {
  formList: [],
};

export const createFormSlice = createSlice({
  name: 'createForm',
  initialState,
  reducers: {
    addNewProducts(state, action) {
      state.formList.push(action.payload);
    },
    removeNewProduct(state, action: PayloadAction<number>) {
      state.formList = state.formList.filter((obj: any) => obj.id !== action.payload);
    },
  },
});

export const { addNewProducts, removeNewProduct } = createFormSlice.actions;
export default createFormSlice.reducer;
