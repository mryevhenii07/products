import  { useEffect,FC } from 'react'

import {useAppDispatch,useAppSelector} from '../../hooks/hooks';
import {categoryList,categoriesId} from '../../store/filterSlice/FilterSlice';
import {selectCategory,selectId} from '../../store/filterSlice/selected';
import s from './Categories.module.css';

const Categories:FC = () => {
const dispatch = useAppDispatch()
const categories = useAppSelector(selectCategory)
const categoryId = useAppSelector(selectId)

useEffect(()=>{
  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(json => dispatch(categoryList(json)));
},[dispatch])


  return (
    <ul className={s.categories}>
      {categories.map((categoryName:any,index:number) => 
        <li onClick={()=> 
            dispatch(categoriesId(categoryName))} 
            key={index} 
            className={categoryId === categoryName ? `${s.active}` : ""}>
        {categoryName} </li>)}
    </ul>
  )
}

export default Categories
