import React, { useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import Promotion from 'components/Promotion/Promotion';

import './homePage.scss';
import { useDispatch } from 'react-redux';
import { load } from 'modules/Shop/store/productSlise';
import { IProduct } from 'interfaces/product.interface';
import Shop from 'modules/Shop/components/Shop/Shop';

interface IProps {
  products: IProduct[];
}

const HomePage = () => {
  const url = 'http://localhost:5000/api/shop/get-products';

  const [productData, setProductData] = useState([]);
  const dispath = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProductData(res.products))
      .catch((error) => error);

    dispath(load(productData));
  }, []);

  return (
    <>
      <Header />
      <Promotion />
      <Shop products={productData} />
    </>
  );
};

export default HomePage;
