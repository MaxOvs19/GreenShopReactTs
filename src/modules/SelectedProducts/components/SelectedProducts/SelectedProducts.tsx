import React from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from 'interfaces/product.interface';
import { getProductInBasket } from 'modules/SelectedProducts/store/basketSlise';

import ProductCardBasket from '../ProductCardBasket/ProductCardBasket';

import './selectedProducts.scss';
import BaseButton from 'UI/BaseButton/BaseButton';

const SelectedProducts = () => {
  const products = useSelector(getProductInBasket);

  let totalPrice = 0;

  return (
    <div className="selected-products">
      <div className="table-basket">
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) &&
              products.map((item: IProduct, index) => {
                totalPrice += item.quantity * item.regular_price.value;
                return (
                  <ProductCardBasket
                    image={item.image}
                    price={item.regular_price.value}
                    sku={item.sku}
                    title={item.title}
                    key={index}
                    id={item.id}
                  />
                );
              })}
          </tbody>
        </table>

        {Array.isArray(products) && products.length === 0 && (
          <div className="selected-products__basket-empty">
            <p>Корзина пуста :(</p>
          </div>
        )}
      </div>

      <div className="selected-products__order">
        <h3>Cart Totals</h3>
        <label htmlFor="coupon_code">Coupon Apply</label>
        <div className="input-code">
          <div className="input-code__box">
            <input type="text" placeholder="Enter coupon code here..." name="coupon_code" />
          </div>

          <BaseButton styles="submit-code">Apply</BaseButton>
        </div>

        <div className="selected-products__order-item">
          <p>Subtotal</p> <span>${totalPrice}</span>
        </div>
        <div className="selected-products__order-item">
          <p>Coupon Discount</p> <span>(-) 00.00</span>
        </div>
        <div className="selected-products__order-item">
          <p>Shiping</p>
          <span>$16.00</span>
        </div>
        <div className="selected-products__order-item total">
          <p>Total</p>
          <span>${totalPrice}</span>
        </div>
        <BaseButton styles="buy">Proceed To Checkout</BaseButton>
      </div>
    </div>
  );
};

export default SelectedProducts;
