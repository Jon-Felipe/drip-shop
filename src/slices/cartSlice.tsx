import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// extra
import { ICart } from '../utils/types';

export interface ICartState {
  cartItems: ICart[];
  total: number;
  shippingFee: number;
}

const initialState: ICartState = {
  cartItems: [],
  total: 0,
  shippingFee: 100,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<ICart>) => {
      const itemExists = state.cartItems.find(
        (item) => item.product.id?.toString() === payload.product.id?.toString()
      );

      if (!itemExists) {
        state.cartItems = [...state.cartItems, payload];
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.product.id?.toString() === payload.product.id?.toString()) {
            return { ...item, quantity: item.quantity + payload.quantity };
          } else {
            return item;
          }
        });
      }

      state.total = state.cartItems.reduce((acc, curr) => {
        return acc + curr.product.price * curr.quantity;
      }, 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
      );

      state.total = state.cartItems.reduce((acc, curr) => {
        return acc + curr.product.price * curr.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
