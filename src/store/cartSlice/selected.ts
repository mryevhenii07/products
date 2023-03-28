import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart.items;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
