import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline, MdOutlineShoppingCart } from 'react-icons/md';

import s from './CartProducts.module.css';
import CartItem from './CartItem/CartItem';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { selectCart, selectTotalPrice } from '../../store/cartSlice/selected';
import { clearItems } from '../../store/cartSlice/cartSlice';

const Cart: React.FC = () => {
  const totalPrice = useAppSelector(selectTotalPrice);

  const products = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const totalCounts = products.reduce((sum: number, obj: any) => sum + obj.count, 0);

  const handleClearItem = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(clearItems());
    }
  };

  // if(!totalPrice){
  //     return  <CartEmpty/>
  // }
  return (
    <div className={s.cart}>
      <div className={s.cartTop}>
        <h2>
          <MdOutlineShoppingCart />
          Cart
        </h2>
        <div className={s.cartClear}>
          <MdDeleteOutline size={18} />
          <span onClick={handleClearItem}>Clear the cart</span>
        </div>
      </div>
      <div className="content__items">
        {products.map((product: any) => (
          <CartItem key={product.id} {...product} />
        ))}
      </div>
      <div className="cart__bottom">
        <div className={s.cartBottomDetails}>
          <div>
            Total Products:
            <b>
              {totalCounts} {totalCounts > 1 ? 'pieces' : 'piece'}
            </b>{' '}
          </div>
          <div>
            Order amount: <b>{totalPrice} $</b>{' '}
          </div>
        </div>
        <div className={s.cartWrapBottomBtn}>
          <Link to="/products" className={s.cartBackBtn}>
            {' '}
            <span>Go back</span>{' '}
          </Link>

          <button className={s.cartPayNowP}>
            <span className={s.cartPayNowS}></span>
            <span className={s.cartPayNowE}></span>
            <span className={`${s.cartPayNowF} ${s.text}`}>Pay Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
