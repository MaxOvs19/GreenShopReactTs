import React, { useState } from 'react';

import './brand.scss';
import { useDispatch } from 'react-redux';
import { filterToBrand, load } from 'modules/Catalog/store/productSlise';

interface IProps {
  title: string;
  id: number;
  indexItem: number;
  selectedIndex: number;
  setActiveBrand: () => void;
}

const Brand = ({ id, title, indexItem, selectedIndex, setActiveBrand }: IProps) => {
  const dispath = useDispatch();

  const sortProduct = (id: number) => {
    setActiveBrand();
    dispath(load());
    dispath(filterToBrand(id));
  };

  return (
    <p
      key={id}
      onClick={() => sortProduct(id)}
      className={indexItem === selectedIndex ? 'active-brand' : ''}
    >
      {title}
    </p>
  );
};

export default Brand;