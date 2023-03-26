import React, { useEffect, useState } from 'react'

import { MyProduct } from '../../types/interface';
import ItemProduct from '../ItemProduct/ItemProduct';
import s from './ListProduct.module.css';

type Props = {}

const ListProduct = (props: Props) => {

    const [products,setProducts]=useState<MyProduct[]>()
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.products))
    },[])
  
  return (
    <div className={s.wrapper}>
        {products?.map((product)=> <ItemProduct key={product.id} {...product}/>)}
    </div>
  )
}

export default ListProduct