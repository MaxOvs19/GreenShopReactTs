import { createSlice } from '@reduxjs/toolkit';
import product from 'modules/Catalog/components/Catalog/products.json';

const initialState = {
  products: product,
};

export const productSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {
    load: (state) => {
      state.products = initialState.products;
    },
    filterToBrand: (state, action) => {
      state.products = state.products.filter((item) => item.brand === action.payload);
    },
  },
});

export const { load, filterToBrand } = productSlise.actions;

export const getProducts = (state: any) => state.products.products;

export default productSlise.reducer;
