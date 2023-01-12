import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const fooditemApi = createApi({
  reducerPath: 'fooditemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001/' }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => `fooditems`,
    }),
    getSales:builder.query({
      query:()=>`bills`
    }),
    addBill:builder.mutation({
      query:(payload)=>({
        url:'/bills',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    })
  }),
})

export const { useGetFoodItemsQuery,useAddBillMutation,useGetSalesQuery } = fooditemApi