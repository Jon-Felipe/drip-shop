import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// extras
import { IUser } from '../utils/types';

export const dripShopApi = createApi({
  reducerPath: 'dripShopApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    register: builder.mutation<Omit<IUser, 'password'>, Omit<IUser, 'id'>>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<
      Omit<IUser, 'password'>,
      Pick<IUser, 'email' | 'password'>
    >({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = dripShopApi;
