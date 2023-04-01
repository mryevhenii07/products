import { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import s from './FullProduct.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchFullProduct } from '../../store/fullProductSlice/fullProductSlice';
import PrivatBank from '../../assets/images/PrivatBank.jpg';
import MonoImg from '../../assets/images/mono.png';

const FullProduct: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { status, fullProduct } = useAppSelector((state) => state.fullProduct);
  const { brand, description, rating, stock, title, price, discountPercentage, images } =
    fullProduct;
  const value = Number(rating);
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
            <div>
              {' '}
              <div>
                <span className={s.brand}> {brand}</span> -<span className={s.title}>{title}</span>:
                {description}
              </div>
              <div className={s.ratingWrap}>
                <Box
                  sx={{
                    width: 100,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Box>

                <span className={s.reviews}>{stock} відгуків</span>
              </div>
            </div>
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
            <div>
              <img src={PrivatBank} className={s.bank} alt="img" width={40} height={40} />
              <img src={MonoImg} className={s.bank} alt="img" width={60} height={40} />
              <img src={PrivatBank} className={s.bank} alt="img" width={40} height={40} />
              <img src={PrivatBank} className={s.bank} alt="img" width={40} height={40} />
              <img src={PrivatBank} className={s.bank} alt="img" width={40} height={40} />
            </div>
            <div className={s.wrapRezetka}>
              <div>
                Продавець: <span>Rozetka</span>{' '}
              </div>
              <div>Rozetka</div>
            </div>
            <div className={s.descriptionPayWrap}>
              <FaWallet className={s.iconWallet} />
              <p>
                <span className={s.descriptionTitle}>Оплата.</span> Оплата під час отримання товару,
                Google Pay, Картою онлайн, Безготівковими для юридичних осіб, Оплатити онлайн
                соціальною картою "Пакунок малюка", Безготівковий для фізичних осіб, Mastercard,
                Visa, Оплатити онлайн картою "єПідтримка", Apple Pay
              </p>
            </div>
            <div className={s.descriptionPayWrap}>
              <MdSecurity className={s.iconSecurity} />
              <p>
                <span className={s.descriptionTitle}>Гарантія.</span> 12 місяців Обмін/повернення
                товару впродовж 14 днів
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>Error API</div>
      )}
    </>
  );
};

export default FullProduct;
