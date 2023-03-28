import { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MyProduct } from '../../types/interface';
import Categories from '../Categories/Categories';
import ItemProduct from '../ItemProduct/ItemProduct';
import Sort from '../Sort/Sort';
import s from './ListProduct.module.css';
import Skeleton from './Skeleton';
import { selectId, selectedValue } from '../../store/filterSlice/selected';
import { selectProduct } from '../../store/productsSlice/selected';
import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/hooks';
import { setProductsList } from '../../store/productsSlice/productSlice';
import HText from '../../helpers/HText/HText';

const ListProduct: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(selectProduct);
  const categoryId = useAppSelector(selectId);
  const searchValue = useAppSelector(selectedValue);

  const search = searchValue ? `search?q=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    // axios.get(`https://dummyjson.com/products/${search}`).then(res =>{
    axios.get(`https://dummyjson.com/products/category/${categoryId}/${search}`).then((res) => {
      dispatch(setProductsList(res.data.products));
      setIsLoading(false);
    });

    window.scrollTo(0, 0);
  }, [categoryId, dispatch, search]);

  return (
    <>
      <Categories />
      <Link className={s.linkProduct} to="/createProduct">
        <button className={s.button}>Create Products</button>
      </Link>
      <div className={s.wrapper}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : productsList?.map((product: MyProduct) => (
              <ItemProduct key={product.id} {...product} />
            ))}
      </div>
    </>
  );
};

export default ListProduct;

// fetch(`https://dummyjson.com/products/category/${categoryId}/${search}`)
//   .then(res => res.json())
//   .then(json => {
//     dispatch(setProductsList(json.products))
//     setIsLoading(false)
// })
