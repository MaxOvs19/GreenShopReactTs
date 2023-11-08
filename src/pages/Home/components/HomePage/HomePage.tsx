import React from 'react';

import Header from 'components/Header/Header';
import Promotion from 'components/Promotion/Promotion';
import Catalog from 'modules/Catalog/components/Catalog/Catalog';

import './homePage.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <Promotion />
      <Catalog />
    </>
  );
};

export default HomePage;
