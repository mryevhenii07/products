import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
categoriesId: string;
categories:any;
searchValue:string
}


const initialState: FilterState = {
    categoriesId: "smartphones",
    searchValue: "",
    categories:[]
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
categoryList:(state,action:PayloadAction)=>{
    state.categories = action.payload
},
categoriesId:(state,action:PayloadAction<string>)=>{
    state.categoriesId = action.payload
},
searchValueChange:(state,action:PayloadAction<string>)=>{
    state.searchValue = action.payload
}
    },
})

export const { categoryList,categoriesId,searchValueChange } = filterSlice.actions
export default filterSlice.reducer