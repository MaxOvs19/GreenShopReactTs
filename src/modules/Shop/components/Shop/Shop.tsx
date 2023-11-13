import { useEffect, useState } from 'react';

import {
  clearFilter,
  getFilteredProducts,
  getProducts,
  load,
} from 'modules/Shop/store/productSlise';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../SideBar/SideBar';
import Catalog from '../Catalog/Catalog';

import './shop.scss';
import { getBrands, loadBrand } from 'modules/Shop/store/brandsSlise';

const Shop = () => {
  const urlProduct = 'http://localhost:5000/api/shop/get-products';
  const urlBrand = 'http://localhost:5000/api/shop/get-brands';

  const [productData, setProductData] = useState([]);
  const [brandData, setBrandData] = useState([]);

  const dispath = useDispatch();
  const products = useSelector(getProducts);
  const productsFilters = useSelector(getFilteredProducts);
  const brands = useSelector(getBrands);

  const loadProduct = () => {
    dispath(clearFilter());
    document.querySelector('.sideBar-list p.active-brand')?.classList.remove('active-brand');
  };

  useEffect(() => {
    dispath(load(productData));
  }, [productData]);

  useEffect(() => {
    dispath(loadBrand(brandData));
  }, [brandData]);

  useEffect(() => {
    fetch(urlProduct)
      .then((res) => res.json())
      .then((res) => setProductData(res.products))
      .catch((error) => error);

    fetch(urlBrand)
      .then((res) => res.json())
      .then((res) => setBrandData(res.brands))
      .catch((error) => error);
  }, []);

  return (
    <div className="shop">
      {brands ? <SideBar brands={brands} /> : 'Loading...'}

      <div className="shop-body">
        <div className="shop-body__title">
          <p onClick={loadProduct}>All Plants</p>
          <p>New Arrivals</p>
          <p>Sale</p>
        </div>

        {Array.isArray(productsFilters) && productsFilters.length > 0 ? (
          <Catalog products={productsFilters} />
        ) : (
          <Catalog products={products} />
        )}
      </div>
    </div>
  );
};

export default Shop;
