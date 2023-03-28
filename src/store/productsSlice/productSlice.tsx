import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {MyProduct} from '../../types/interface';

interface ProductState {
  productList: any
}

const initialState: ProductState = {
  productList: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
setProductsList(state,action:PayloadAction<MyProduct>){
  state.productList = action.payload
}
  },
})

export const { setProductsList } = productSlice.actions



export default productSlice.reducer