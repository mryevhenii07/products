import { useState, FC } from 'react';
import { FiTruck, FiShoppingCart } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import s from './ItemProduct.module.css';
import { MyProduct } from '../../types/interface';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addItem } from '../../store/cartSlice/cartSlice';
import { selectCart } from '../../store/cartSlice/selected';

interface Props extends MyProduct {}

const ItemProduct: FC<Props> = ({
  brand,
  price,
  rating,
  stock,
  title,
  thumbnail,
  id,
  description,
  discountPercentage,
}) => {
  const [productCount, setProductCount] = useState(0);

  const discount = Math.floor((price / 100) * discountPercentage + price);
  const discountFixed = Number(discount.toFixed()).toLocaleString();
  const priceLocal = price.toLocaleString();

  const dispatch = useAppDispatch();

  const cartItem = useAppSelector((state) => state.cart.items.find((obj: any) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;

  const handleClickAdd = () => {
    const item = {
      id,
      brand,
      title,
      description,
      discountPercentage,
      thumbnail,
      price,
    };
    dispatch(addItem(item));
  };

  return (
    <div key={id} className={s.wrapper}>
      <div className={s.wrapImg}>
        <img src={thumbnail} alt="img" width="100%" height={200} />
      </div>
      <div className={s.wrapInfo}>
        <p className={s.wrapBlandTitle}>
          {brand} {title}
        </p>
        <div className={s.description}>{description}</div>
        <div>
          <Box
            sx={{
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Rating
              name="text-feedback"
              value={rating}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <div className={s.wrapStock}>{stock} reviews</div>
          </Box>
        </div>
        <div className={s.wrapPriceBtn}>
          <div className={s.priceWrap}>
            {discountFixed === priceLocal ? (
              <div className={s.sale}>Do you want a discount?</div>
            ) : (
              <div className={s.discount}>{discountFixed}$</div>
            )}

            <div className={s.price}>{priceLocal}$</div>
          </div>
          <button onClick={handleClickAdd} className={s.addProduct}>
            <FiShoppingCart className={s.iconCart} />
            {addedCount ? <span className={s.productCount}>{addedCount} </span> : ''}{' '}
          </button>
        </div>
        <div className={s.wrapCart}>
          <div className={s.wrapTruck}>
            {' '}
            <div>Ready to ship, and you🙃</div> <FiTruck className={s.IconTruck} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
