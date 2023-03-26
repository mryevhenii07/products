import React, { useEffect, useState } from 'react'

import { MyProduct } from '../../types/interface';
import ItemProduct from '../ItemProduct/ItemProduct';
import s from './ListProduct.module.css';
import Skeleton from './Skeleton';

type Props = {}

const ListProduct = (props: Props) => {
    const [products,setProducts]=useState<MyProduct[]>()
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json.products)
          setIsLoading(false)
        })

      
    },[])
  
  return (
    <div className={s.wrapper}>
        {/* {products?.map((product)=> <Skeleton key={product.id} {...product}/>)} */}
        {/* {products?.map((product)=> <ItemProduct key={product.id} {...product}/>)} */}
   {isLoading ? [...new Array(8)].map((_,index) => <Skeleton key={index}/>) : products?.map((product)=> <ItemProduct key={product.id} {...product}/>)}
    </div>
  )
}

export default ListProduct