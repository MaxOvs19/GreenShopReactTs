import React from 'react';

import ProductCard from 'components/ProductCard/ProductCard';
import { IProduct } from 'interfaces/product.interface';

interface IProps {
  products: IProduct[];
}
const Catalog = ({ products }: IProps) => {
  return (
    <div className="shop-body__list">
      {products.map((item: IProduct, index: number) => {
        return <ProductCard key={index} productInfo={item} />;
      })}
    </div>
  );
};

export default Catalog;
