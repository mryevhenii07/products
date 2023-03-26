import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {HiOutlineShoppingCart} from 'react-icons/hi';

import SearchProduct from '../SearchProduct/SearchProduct';

import s from './Header.module.css';

type Props = {}

const Header = (props: Props) => {
    const {pathname} = useLocation()

  return (
    <div className={s.header}>
    <div className={s.container}>
        <Link to="products">
            <div className="header__logo">
                {/* <img width="38" src={logo} alt="Pizza logo" /> */}
                <div>
                    <h1>Product Store</h1>
                    <p>Смартфоны, ТВ и электроника</p>
                </div>
            </div></Link>
        <SearchProduct />
        <Link to="/cart" className={s.headerCart}>
            {pathname !== "/cart" &&   <Link to="/cart" >
                    <HiOutlineShoppingCart className={s.icon} />
<span className={s.totalCount}>1</span>
            </Link> }
        </Link>
    </div>
</div>
)
}

export default Header