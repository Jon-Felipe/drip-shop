import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import useReducer from './slices/userSlice';
import { dripShopApi } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    [dripShopApi.reducerPath]: dripShopApi.reducer,
    user: useReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dripShopApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
