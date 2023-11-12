import { useEffect, useState } from 'react';

import { load } from 'modules/Shop/store/productSlise';
import { useDispatch } from 'react-redux';

import SideBar from '../SideBar/SideBar';
import Catalog from '../Catalog/Catalog';

import './shop.scss';

const Shop = () => {
  const url = 'http://localhost:5000/api/shop/get-products';

  const [productData, setProductData] = useState([]);
  const dispath = useDispatch();

  const loadProduct = () => {
    // dispath(load());
    document.querySelector('.sideBar-list p.active-brand')?.classList.remove('active-brand');
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProductData(res.products))
      .catch((error) => error);

    dispath(load(productData));
  }, []);

  return (
    <div className="shop">
      <SideBar />
      <div className="shop-body">
        <div className="shop-body__title">
          <p onClick={loadProduct}>All Plants</p>
          <p>New Arrivals</p>
          <p>Sale</p>
        </div>

        <Catalog products={productData} />
      </div>
    </div>
  );
};

export default Shop;
