import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SelectedProducts from 'modules/SelectedProducts/components/SelectedProducts/SelectedProducts';

import './basket.scss';

const Basket = () => {
  return (
    <>
      <Header />
      <SelectedProducts />
      <Footer />
    </>
  );
};

export default Basket;
