import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { MyProduct } from '../../../types/interface';
import { addItem, removeItem, minusItem } from '../../../store/cartSlice/cartSlice';
import s from './CartItem.module.css';

interface Props extends MyProduct {}

const CartItem: React.FC<Props> = ({ brand, title, price, thumbnail, discountPercentage, id }) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => state.cart.items.find((obj: any) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;
  const discount = Math.floor((price / 100) * discountPercentage + price);

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  return (
    <div className={s.cartItem}>
      <div className={s.wrapLeftBlock}>
        <img src={thumbnail} alt="img" width={80} height={80} />
        <div className={s.brand}>
          <p>{brand}</p>
          <span>{title}</span>
        </div>
        {discount === price ? (
          ''
        ) : (
          <div className={s.discount}>{discountPercentage.toFixed()}%</div>
        )}
      </div>

      <div className={s.wrapRightBlock}>
        <div className={s.wrapPlusMinusCount}>
          <AiOutlineMinus className={s.iconCount} onClick={onClickMinus} />

          <span className={s.count}>{addedCount}</span>
          <AiOutlinePlus className={s.iconCount} onClick={onClickPlus} />
        </div>
        <div>
          {discount === price ? '' : <div className={s.oldPrice}>{discount * addedCount}$</div>}

          <div className={s.newPrice}>{price * addedCount}$</div>
        </div>
        <AiOutlineClose onClick={() => dispatch(removeItem(id))} className={s.deleteItem} />
      </div>
    </div>
  );
};

export default CartItem;
