import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('users/fetchCategoriesStatus', async () => {
  const { data } = await axios.get('https://dummyjson.com/products/categories');
  return data;
});

interface FilterState {
  categoriesId: string;
  categories: any;
  searchValue: string;
  status: string;
}

const initialState: FilterState = {
  categoriesId: 'smartphones',
  categories: [],
  searchValue: '',
  status: 'loading',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoriesId: (state, action: PayloadAction<string>) => {
      state.categoriesId = action.payload;
    },
    setSearchChange: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = 'error';
      state.categories = [];
    });
  },
});

export const { setCategoriesId, setSearchChange } = filterSlice.actions;
export default filterSlice.reducer;
