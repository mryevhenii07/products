import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice/FilterSlice';
import productSlice from './productsSlice/productSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
