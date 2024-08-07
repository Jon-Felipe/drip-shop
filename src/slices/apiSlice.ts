import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// extras
import { IUser } from '../utils/types';

export const dripShopApi = createApi({
  reducerPath: 'dripShopApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    register: builder.mutation<Partial<{ user: IUser }>, Partial<IUser>>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<
      Partial<{ user: IUser }>,
      Pick<IUser, 'email' | 'password'>
    >({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
    updateUser: builder.mutation<{ updatedUser: IUser }, Partial<IUser>>({
      query: (userData) => ({
        url: '/user/update-user',
        method: 'PATCH',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useUpdateUserMutation } =
  dripShopApi;
