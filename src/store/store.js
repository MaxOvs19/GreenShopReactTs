import { configureStore } from '@reduxjs/toolkit';
import products from 'modules/Shop/store/productSlise';
import brands from 'modules/Shop/store/brandsSlise';
import basket from 'modules/SelectedProducts/store/basketSlise';

export const store = configureStore({
  reducer: {
    products: products,
    brands: brands,
    basket: basket,
  },
});
