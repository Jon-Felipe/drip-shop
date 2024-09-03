import { dripShopApi } from './apiSlice.ts';

// extras
import { IDepartment } from '../utils/types.ts';

const departmentApi = dripShopApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartment: build.query<
      { department: IDepartment },
      { departmentParam: String; sortValue?: String }
    >({
      query: ({ departmentParam, sortValue }) => ({
        url: `/department/${departmentParam}?sort=${sortValue}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDepartmentQuery } = departmentApi;
