import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice/FilterSlice';
import productSlice from './productsSlice/productSlice';
import cartSlice from './cartSlice/cartSlice';
import createFormSlice from './createFormSlice/createFormSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    product: productSlice,
    cart: cartSlice,
    createForm: createFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
