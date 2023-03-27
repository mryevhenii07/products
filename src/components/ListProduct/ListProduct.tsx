
import { useEffect, useState,FC } from 'react'

import { MyProduct } from '../../types/interface';
import Categories from '../Categories/Categories';
import ItemProduct from '../ItemProduct/ItemProduct';
import Sort from '../Sort/Sort';
import s from './ListProduct.module.css';
import Skeleton from './Skeleton';
import {useAppSelector} from '../../hooks/hooks';
import {selectId,selectedValue} from '../../store/filterSlice/selected';


const ListProduct:FC = () => {
    const [products,setProducts]=useState<MyProduct[]>()
    const [isLoading,setIsLoading]=useState(true)

    const categoryId = useAppSelector(selectId)
    const searchValue = useAppSelector(selectedValue)
    const search = searchValue ? `search?q=${searchValue}` : ""

    useEffect(()=>{
      setIsLoading(true)
        fetch(`https://dummyjson.com/products/category/${categoryId}/${search}`)
          .then(res => res.json())
          .then(json => {
            setProducts(json.products)
            setIsLoading(false)
        })
    window.scrollTo(0,0)
      
    },[categoryId,search])
  
  return (
    <>
      <Categories />
      <Sort/>
        <div className={s.wrapper}>
  {isLoading ? [...new Array(6)].map((_,index) => <Skeleton key={index}/>) : products?.map((product)=> <ItemProduct key={product.id} {...product}/>)}
        </div>
    </>
  )
}

export default ListProduct