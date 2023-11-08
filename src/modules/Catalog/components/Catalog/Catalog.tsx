import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

import { getProducts, load } from 'modules/Catalog/store/productSlise';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from 'components/ProductCard/ProductCard';
import { IProduct } from 'interfaces/product.interface';

import './catalog.scss';
import { productApi } from 'modules/Catalog/api/getProducts';

const Catalog = () => {
  console.log(productApi);
  
  const allProduct = useSelector(getProducts);
  const dispath = useDispatch();

  const loadProduct = () => {
    dispath(load());
    document.querySelector('.sideBar-list p.active-brand')?.classList.remove('active-brand');
  };

  return (
    <div className="catalog">
      <SideBar />
      <div className="catalog-body">
        <div className="catalog-body__title">
          <p onClick={loadProduct}>All Plants</p>
          <p>New Arrivals</p>
          <p>Sale</p>
        </div>

        <div className="catalog-body__list">
          {allProduct.map((item: IProduct, index: number) => {
            return <ProductCard key={index} productInfo={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
