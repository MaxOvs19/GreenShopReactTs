import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'interfaces/product.interface';

const initialState = {
  products: [],
};

export const productSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {
    load: (state, action) => {
      state.products = action.payload;
    },
    filterToBrand: (state, action) => {
      state.products = state.products.filter((item: IProduct) => item.brand === action.payload);
    },
  },
});

export const { load, filterToBrand } = productSlise.actions;

export const getProducts = (state: any) => state.products.products;

export default productSlise.reducer;
