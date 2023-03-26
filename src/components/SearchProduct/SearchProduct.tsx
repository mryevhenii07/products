import {useEffect, useState} from 'react'
// import HText from '../../helpers/HText';
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import {MyProduct} from '../../types/interface';
import s from './SearchProduct.module.css';

type Props = {}

const SearchProduct = (props: Props) => {

const [products,setProducts]=useState<MyProduct[]>()
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.products))
    },[])
    console.log(products);
 
    
  return (
   
    // <div>kk</div>
    <div className={s.root} >
            <GoSearch className={s.icon} />
            <input
            // ref={inputRef} 
            className={s.input} 
            // type="text"
            // placeholder='Пошук піци'
            // value={value} 
            // onChange={handleChange} 
            />
            {/* {value && <GrClose onClick={handleClickClear}  className={s.clearIcon} />} */}
        </div>
    
  )
}

export default SearchProduct