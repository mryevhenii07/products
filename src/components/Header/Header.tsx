import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';

import SearchProduct from '../SearchProduct/SearchProduct';
import { useAppSelector } from '../../hooks/hooks';
import { selectCart } from '../../store/cartSlice/selected';
import s from './Header.module.css';

const Header: FC = () => {
  const { pathname } = useLocation();
  const items = useAppSelector(selectCart);

  const totalCounts = items.reduce((sum: number, obj: any) => sum + obj.count, 0);

  return (
    <div className={s.header}>
      <div className={s.container}>
        <Link to="products">
          <div>
            <div>
              <h1>Product Store</h1>
              <p>Смартфоны, ТВ и электроника</p>
            </div>
          </div>
        </Link>
        <SearchProduct />
        <Link to="/cart">
          {pathname !== '/cart' && (
            <Link to="/cart" className={s.wrapIcon}>
              <div className={s.headerCart}>
                <HiOutlineUser className={s.icon} />
              </div>
              <div className={s.headerCart}>
                <HiOutlineShoppingCart className={s.icon} />
                {totalCounts ? <span className={s.totalCount}>{totalCounts}</span> : ''}
              </div>
            </Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
