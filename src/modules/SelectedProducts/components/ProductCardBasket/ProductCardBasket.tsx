import React, { useState } from 'react';

import deleteIcon from 'assets/icons/delete.svg';

import './productCardBasket.scss';
import { useDispatch } from 'react-redux';
import {
  addQuantity,
  deleteProduct,
  removeQuantity,
} from 'modules/SelectedProducts/store/basketSlise';

interface IProductCardBasket {
  image: string;
  title: string;
  sku: string;
  price: number;
  id: number;
}

const ProductCardBasket = ({ image, price, sku, title, id }: IProductCardBasket) => {
  const dispath = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    dispath(addQuantity(id));
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    // dispath(removeQuantity(id));
    setQuantity(quantity - 1);
  };

  const deleteCardInVasket = (id: number) => {
    dispath(deleteProduct(id));
  };

  return (
    <tr className="product-info__item">
      <td className="product-info__item-decs">
        <img src={image} alt="@" />
        <div>
          <p>{title}</p>
          <span>SKU: {sku}</span>
        </div>
      </td>
      <td>
        <p>${(price * quantity).toFixed(2)}</p>
      </td>
      <td>
        <div className="quantity">
          <button className="button-col" onClick={decrement}>
            -
          </button>
          <p>{quantity}</p>
          <button className="button-col" onClick={increment}>
            +
          </button>
        </div>
      </td>
      <td>
        <div className="product-info__item-delete">
          <p>${(price * quantity).toFixed(2)}</p>
          <img
            src={deleteIcon}
            alt="@"
            onClick={() => {
              deleteCardInVasket(id);
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductCardBasket;
