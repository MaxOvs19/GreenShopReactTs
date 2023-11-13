import { createSlice } from '@reduxjs/toolkit';
import brands from 'modules/Shop/components/SideBar/brands.json';

const initialState = {
  brands: [],
};

export const brandsSlise = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    loadBrand: (state, action) => {
      state.brands = action.payload;
    },
  },
});

export const { loadBrand } = brandsSlise.actions;

export const getBrands = (state: any) => state.brands.brands;

export default brandsSlise.reducer;
