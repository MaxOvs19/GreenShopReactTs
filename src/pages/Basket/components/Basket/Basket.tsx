import React from 'react';

import Header from 'components/Header/Header';
import SelectedProducts from 'modules/SelectedProducts/components/SelectedProducts/SelectedProducts';

import './basket.scss';

const Basket = () => {
  return (
    <>
      <Header />
      <SelectedProducts />
    </>
  );
};

export default Basket;
