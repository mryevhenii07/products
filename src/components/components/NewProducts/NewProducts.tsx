import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { selectForm } from '../../../store/createFormSlice/selected';

import s from './NewProducts.module.css';
import NewItem from '../NewItem/NewItem';
type Props = {};

const NewProducts = (props: Props) => {
  const products = useAppSelector(selectForm);

  return (
    <div className={s.listProducts}>
      <div className={s.description}>
        <div>Name</div>
        <div>Author</div>
        <div>Years</div>
        <div>Rating</div>
        <div>Delete</div>
      </div>
      <ul className={s.block}>
        {products.map((product: any) => (
          <NewItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default NewProducts;
