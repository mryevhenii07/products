import React from 'react';

import FormCreate from '../components/components/Form/Form';
import NewProducts from '../components/components/NewProducts/NewProducts';

type Props = {};

const CreateProduct = (props: Props) => {
  return (
    <div className="wrapForm">
      <NewProducts />
      <FormCreate />
    </div>
  );
};

export default CreateProduct;
