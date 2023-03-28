import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
categoriesId: string;
categories:any;
searchValue:string
}


const initialState: FilterState = {
    categoriesId: "smartphones",
    categories:[],
    searchValue: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
setCategoryList:(state,action:PayloadAction)=>{
    state.categories = action.payload
},
setCategoriesId:(state,action:PayloadAction<string>)=>{
    state.categoriesId = action.payload
},
setSearchChange:(state,action:PayloadAction<string>)=>{
    state.searchValue = action.payload
}
    },
})

export const { setCategoryList,setCategoriesId,setSearchChange } = filterSlice.actions
export default filterSlice.reducer