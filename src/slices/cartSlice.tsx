import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// extra
import { ICart } from '../utils/types';

export interface ICartState {
  cartItems: ICart[];
}

const initialState: ICartState = {
  cartItems: [],
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
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
      );
    },
    toggleCartQuantity: (
      state,
      action: PayloadAction<{ prodIndex: number; actionValue: string }>
    ) => {
      const { prodIndex, actionValue } = action.payload;
      if (actionValue === 'increase') {
        state.cartItems[prodIndex].quantity += 1;
      } else if (actionValue === 'decrease') {
        if (state.cartItems[prodIndex].quantity <= 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product.id !== state.cartItems[prodIndex].product.id
          );
        } else {
          state.cartItems[prodIndex].quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, toggleCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
