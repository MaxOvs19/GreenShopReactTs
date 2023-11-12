import SideBar from '../SideBar/SideBar';
import { useEffect, useState } from 'react';

import { getProducts, load } from 'modules/Shop/store/productSlise';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from 'components/ProductCard/ProductCard';
import { IProduct } from 'interfaces/product.interface';

import './shop.scss';

interface IProps {
  products: IProduct[];
}

const Shop = ({ products }: IProps) => {
  console.log(products);

  const dispath = useDispatch();

  const loadProduct = () => {
    // dispath(load());
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
          {products.map((item: IProduct, index: number) => {
            return <ProductCard key={index} productInfo={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
