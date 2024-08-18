import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// extra
import { ICart } from '../utils/types';

export interface ICartState {
  cartItems: ICart[];
  cartTotal: number;
}

const initialState: ICartState = {
  cartItems: [],
  cartTotal: 0,
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

      state.cartTotal = state.cartItems.reduce(
        (acc, curr) => acc + curr.product.price * curr.quantity,
        0
      );
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ cartItem: ICart; index: number }>
    ) => {
      const foundCartItem = state.cartItems[action.payload.index];
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== foundCartItem?.product.id
      );
      state.cartTotal =
        state.cartTotal -
        foundCartItem?.product.price! * foundCartItem?.quantity!;
    },
    toggleCartQuantity: (
      state,
      action: PayloadAction<{ prodIndex: number; actionValue: string }>
    ) => {
      const { prodIndex, actionValue } = action.payload;

      const cartItem = state.cartItems[prodIndex];

      if (actionValue === 'increase') {
        if (cartItem.quantity === cartItem.countInStock) {
          cartItem.quantity = cartItem.countInStock;
        } else {
          cartItem.quantity += 1;
        }
      } else if (actionValue === 'decrease') {
        if (state.cartItems[prodIndex].quantity <= 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product.id !== cartItem.product.id
          );
        } else {
          cartItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, toggleCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
