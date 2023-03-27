import { RootState } from '../store';

export const selectCategory = (state: RootState) => state.filter.categories;
export const selectId = (state: RootState) => state.filter.categoriesId;
export const selectedValue = (state: RootState) => state.filter.searchValue;
