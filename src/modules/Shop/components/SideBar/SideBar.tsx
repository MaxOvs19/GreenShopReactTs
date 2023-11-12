import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IBrand } from 'modules/Shop/interface/brand.interface';
import { getBrands } from 'modules/Shop/store/brandsSlise';
import Brand from '../Brand/Brand';

import './sideBar.scss';

const SideBar = () => {
  const brands = useSelector(getBrands);
  const [indexBrand, setIndexBrand] = useState<number>(-1);

  const selectBrand = (index: number) => {
    setIndexBrand(index);
  };

  return (
    <div className="sideBar">
      <h1>Categories</h1>
      <div className="sideBar-list">
        {brands.map((item: IBrand, index: number) => {
          return (
            <Brand
              id={item.id}
              title={item.title}
              key={index}
              setActiveBrand={() => selectBrand(index)}
              indexItem={index}
              selectedIndex={indexBrand}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
