import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFullProduct = createAsyncThunk(
  'fullProduct/fetchFullProductStatus',
  async (id: any) => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
  },
);

interface fullProductState {
  fullProduct: any;
  status: string;
}

const initialState: fullProductState = {
  fullProduct: [],
  status: 'Loading',
};

export const fullProductSlice = createSlice({
  name: 'fullProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullProduct.pending, (state) => {
      state.status = 'loading';
      state.fullProduct = [];
    });
    builder.addCase(fetchFullProduct.fulfilled, (state, action) => {
      state.fullProduct = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchFullProduct.rejected, (state) => {
      state.status = 'error';
      state.fullProduct = [];
    });
  },
});

export default fullProductSlice.reducer;
