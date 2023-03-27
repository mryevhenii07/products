import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {HiOutlineShoppingCart,HiOutlineUser} from 'react-icons/hi';

import SearchProduct from '../SearchProduct/SearchProduct';
import s from './Header.module.css';

type Props = {}

const Header = (props: Props) => {
    const {pathname} = useLocation()

  return (
    <div className={s.header}>
    <div className={s.container}>
        <Link to="products">
            <div >

                <div>
                    <h1>Product Store</h1>
                    <p>Смартфоны, ТВ и электроника</p>
                </div>
            </div>
    </Link>
        <SearchProduct />
        <Link to="/cart" >
            {pathname !== "/cart" &&   <Link to="/cart" className={s.wrapIcon}>
            <div className={s.headerCart}><HiOutlineUser className={s.icon}/> </div>     <div className={s.headerCart}><HiOutlineShoppingCart className={s.icon} /><span className={s.totalCount}>1</span></div>   
            
        </Link> }
    </Link>
    </div>
</div>
)
}

export default Header