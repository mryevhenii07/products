import { RootState } from '../store';

export const selectProduct = (state: RootState) => state.product.productList;
export const selectStatus = (state: RootState) => state.product.status;
