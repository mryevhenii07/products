
import React, { useEffect, useState } from 'react'

import { MyProduct } from '../../types/interface';
import Categories from '../Categories/Categories';
import ItemProduct from '../ItemProduct/ItemProduct';
import Sort from '../Sort/Sort';
import s from './ListProduct.module.css';
import Skeleton from './Skeleton';

type Props = {}

const ListProduct = (props: Props) => {
    const [products,setProducts]=useState<MyProduct[]>()
    const [isLoading,setIsLoading]=useState(true)

    const [categoryId,setCategoryId] =useState("smartphones")
    const [sortType,setSortType] =useState(0)


    useEffect(()=>{
      setIsLoading(true)
        fetch(`https://dummyjson.com/products/category/${categoryId}`)
        // fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json.products)
          setIsLoading(false)
        })
window.scrollTo(0,0)
      
    },[categoryId])
  


  return (
    <>
     <Categories categoryId={categoryId} onClickCategory={(id)=> setCategoryId(id)}/>
      <Sort/>
    <div className={s.wrapper}>

      
   {isLoading ? [...new Array(8)].map((_,index) => <Skeleton key={index}/>) : products?.map((product)=> <ItemProduct key={product.id} {...product}/>)}
    </div></>
  )
}

export default ListProduct