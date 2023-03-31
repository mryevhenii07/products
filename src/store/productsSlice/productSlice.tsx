import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'product/fetchProductStatus',
  async ({ search, categoryId }: any, thunkApi) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${categoryId}/${search}`,
    );

    console.log(thunkApi);

    return data.products;
  },
);

interface ProductState {
  productList: any;
  status: string;
}

const initialState: ProductState = {
  productList: [],
  status: 'Loading',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
      state.productList = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'error';
      state.productList = [];
    });
  },
});

export default productSlice.reducer;
