import  { useEffect,FC } from 'react'
import axios from 'axios';
import {useAppDispatch,useAppSelector} from '../../hooks/hooks';
import {setCategoryList,setCategoriesId} from '../../store/filterSlice/FilterSlice';
import {selectCategory,selectId} from '../../store/filterSlice/selected';
import s from './Categories.module.css';

const Categories:FC = () => {
const dispatch = useAppDispatch()
const categories = useAppSelector(selectCategory)
const categoryId = useAppSelector(selectId)

useEffect(()=>{
axios.get('https://dummyjson.com/products/categories').then(res => dispatch(setCategoryList(res.data)))
},[dispatch])

  return (
    <ul className={s.categories}>
      {categories.map((categoryName:any,index:number) => 
        <li onClick={()=> 
            dispatch(setCategoriesId(categoryName))} 
            key={index} 
            className={categoryId === categoryName ? `${s.active}` : ""}>
        {categoryName} </li>)}
    </ul>
  )
}

export default Categories




//   fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(json => dispatch(setCategoryList(json)));