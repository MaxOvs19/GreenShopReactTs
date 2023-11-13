import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'interfaces/product.interface';

interface IProps {
  products: IProduct[];
  filterProduct: IProduct[];
}

const initialState: IProps = {
  products: [],
  filterProduct: [],
};

export const productSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {
    load: (state, action) => {
      state.products = action.payload;
    },
    filterToBrand: (state, action) => {
      state.filterProduct = state.products.filter(
        (item: IProduct) => item.brand === action.payload,
      );
    },
    clearFilter: (state) => {
      state.filterProduct = [];
    },
  },
});

export const { load, filterToBrand, clearFilter } = productSlise.actions;

export const getProducts = (state: any) => state.products.products;
export const getFilteredProducts = (state: any) => state.products.filterProduct;

export default productSlise.reducer;
