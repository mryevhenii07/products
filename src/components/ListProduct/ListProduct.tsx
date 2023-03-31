import { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';

import { MyProduct } from '../../types/interface';
import Categories from '../Categories/Categories';
import ItemProduct from '../ItemProduct/ItemProduct';
import s from './ListProduct.module.css';
import Skeleton from './Skeleton';
import { selectId, selectedValue } from '../../store/filterSlice/selected';
import { selectProduct, selectStatus } from '../../store/productsSlice/selected';
import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/hooks';
import { fetchProducts } from '../../store/productsSlice/productSlice';

const ListProduct: FC = () => {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(selectProduct);
  const isLoading = useAppSelector(selectStatus);
  const categoryId = useAppSelector(selectId);
  const searchValue = useAppSelector(selectedValue);
  const search = searchValue ? `search?q=${searchValue}` : '';

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(fetchProducts({ search, categoryId }));
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [categoryId, dispatch, search]);

  return (
    <div className={s.wrapListProduct}>
      <Categories />
      <Link className={s.linkProduct} to="/createProduct">
        <button className={s.button}>Create Products</button>
      </Link>
      {isLoading === 'error' ? (
        <div>
          <h1>Error</h1>
          <div>Try late</div>
        </div>
      ) : (
        <div className={s.wrapper}>
          {isLoading === 'loading'
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : productsList?.map((product: MyProduct) => (
                <ItemProduct key={product.id} {...product} />
              ))}
        </div>
      )}
    </div>
  );
};

export default ListProduct;

// fetch(`https://dummyjson.com/products/category/${categoryId}/${search}`)
//   .then(res => res.json())
//   .then(json => {
//     dispatch(setProductsList(json.products))
//     setIsLoading(false)
// })
