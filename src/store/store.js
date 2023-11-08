import { configureStore } from '@reduxjs/toolkit';
import products from 'modules/Catalog/store/productSlise';
import brands from 'modules/Catalog/store/brandsSlise';
import basket from 'modules/SelectedProducts/store/basketSlise';

export const store = configureStore({
  reducer: {
    products: products,
    brands: brands,
    basket: basket,
  },
});
