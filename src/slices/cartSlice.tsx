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
      const foundCartItem = state.cartItems.find(
        (cartItem) => cartItem.cartId === payload.cartId
      );

      if (!foundCartItem) {
        state.cartItems.push(payload);
      } else {
        foundCartItem.quantity += payload.quantity;
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
        (item) => item.product._id !== foundCartItem?.product._id
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
        cartItem.quantity += 1;
      } else if (actionValue === 'decrease') {
        if (state.cartItems[prodIndex].quantity <= 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product._id !== cartItem.product._id
          );
        } else {
          cartItem.quantity -= 1;
        }
      }

      state.cartTotal = state.cartItems.reduce((acc, curr) => {
        return acc + curr.product.price * curr.quantity;
      }, 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
    },
  },
});

export const { addToCart, removeFromCart, toggleCartQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
