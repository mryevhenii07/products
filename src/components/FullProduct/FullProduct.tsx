import { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import s from './FullProduct.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchFullProduct } from '../../store/fullProductSlice/fullProductSlice';

const FullProduct: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { status, fullProduct } = useAppSelector((state) => state.fullProduct);
  const { brand, description, rating, stock, title, price, discountPercentage, images } =
    fullProduct;
  const discount = Math.floor((price / 100) * discountPercentage + price);
  const discountFixed = Number(discount.toFixed()).toLocaleString();
  useEffect(() => {
    async function fetchFull() {
      dispatch(fetchFullProduct(id));
    }
    fetchFull();
  }, [dispatch, id]);

  return (
    <>
      {status === 'success' ? (
        <div className={s.wrap}>
          <div className={s.wrapImg}>
            <Carousel>
              {images.map((imageUrl: string, index: number) => (
                <img key={index} src={imageUrl} alt="img" />
              ))}
            </Carousel>
          </div>
          <div className={s.wrapRightBlock}>
            <div className={s.wrapRightOne}>
              <div className={s.wrapRightPrice}>
                <div className={s.discount}>{discountFixed}</div>
                <div className={s.priceOne}>{price}$</div>
                <div className={s.haveProduct}>Є в наявності</div>
              </div>
              <div className={s.pay}>Купити</div>
              <div className={s.payCredit}>Купити в кредит </div>
            </div>

            <div className={s.springShopping}>
              ЧАС НА ВЕСНЯНИЙ ШОПІНГ <span className={s.springShoppingDiscount}>ДО -50%</span>
            </div>
            <div className={s.bonus}>
              <span className={s.bonusB}>Б</span>{' '}
              <span className={s.bonusBPlus}>+ 49 бонусних $ </span> на рахунок у разі купівлі
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>Error API</div>
      )}
    </>
  );
};

export default FullProduct;
