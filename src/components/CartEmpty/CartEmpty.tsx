import React from 'react';
import { Link } from 'react-router-dom';

import emptyImg from '../../assets/images/empty-cart.png';
import HText from '../../helpers/HText/HText';
import s from './CartEmpty.module.css';
const CartEmpty: React.FC = () => {
  return (
    <>
      <div className={s.cartEmpty}>
        <HText>
          The cart is empty<span>😕</span>
        </HText>

        <p>
          Most likely, you did not order.
          <br />
          To order a product, go to the main page.
        </p>
        <img className={s.img} src={emptyImg} alt="Empty cart" />
        <Link to="/products" className="button button--black">
          <button className={s.button}>Go back!!!</button>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
