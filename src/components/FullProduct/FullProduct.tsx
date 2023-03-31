import axios from 'axios';
import React, { useEffect, useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import { MyProduct } from '../../types/interface';
import s from './FullProduct.module.css';
type Props = {};

const FullProduct: FC = () => {
  const { id } = useParams();

  // console.log(id);
  const [pro, setPro] = useState<MyProduct>();
  useEffect(() => {
    async function fetchProdu() {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        setPro(data);
      } catch (error) {}
    }
    fetchProdu();
  }, [id]);
  console.log(pro);

  return (
    <div className={s.wrap}>
      <div className={s.wrapImg}>{pro?.brand}</div>

      <div className={s.wrapRightBlock}>assaasas</div>
    </div>
  );
};

export default FullProduct;
