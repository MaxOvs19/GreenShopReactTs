import React, { useState } from 'react';
import { IBrand } from 'modules/Shop/interface/brand.interface';
import Brand from '../Brand/Brand';

import './sideBar.scss';

interface IProps {
  brands: IBrand[];
}

const SideBar = ({ brands }: IProps) => {
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

      <h1 className="size">Size</h1>
      <div className="sideBar-list">
        <p className="brand-item">Small</p>
        <p className="brand-item">Medium</p>
        <p className="brand-item">Large</p>
      </div>
    </div>
  );
};

export default SideBar;
