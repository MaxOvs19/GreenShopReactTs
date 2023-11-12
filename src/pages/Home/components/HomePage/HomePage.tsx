import React, { useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import Promotion from 'components/Promotion/Promotion';
import Shop from 'modules/Shop/components/Shop/Shop';

import './homePage.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <Promotion />
      <Shop />
    </>
  );
};

export default HomePage;
