import React from 'react';

import FormCreate from '../components/components/Form/Form';
import NewProducts from '../components/components/NewProducts/NewProducts';
// import { useAppSelector } from '../hooks/hooks';
// import { selectForm } from '../store/createFormSlice/selected';

type Props = {};

const CreateProduct = (props: Props) => {
  // const products = useAppSelector(selectForm);
  // console.log(products);

  return (
    <div className="wrapForm">
      {/* {products.length > 0 ? <NewProducts /> : <div>ssssss</div>} */}
      <NewProducts />
      <FormCreate />
    </div>
  );
};

export default CreateProduct;
