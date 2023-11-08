import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'interfaces/product.interface';

interface IBasket {
  basket: IProduct[];
}

const initialState: IBasket = {
  basket: [],
};

export const basketSlise = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.basket.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    addQuantity: (state, action) => {
      state.basket.find((item) => {
        if (item.quantity === undefined) {
          item.quantity = 1;
        }

        if (item.id === action.payload) {
          item.quantity += 1;
        }
      });
    },
    removeQuantity: (state, action) => {
      state.basket.find((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }

        if (item.quantity === 0) {
          state.basket = state.basket.filter((item) => item.id !== action.payload);
        }
      });
    },
  },
});

export const { addProduct, deleteProduct, addQuantity, removeQuantity } = basketSlise.actions;

export const getProductInBasket = (state: any) => state.basket.basket;

export default basketSlise.reducer;
