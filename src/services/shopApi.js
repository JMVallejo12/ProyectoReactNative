import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../database/realtimeDatabase" 

export const ShopApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ()=> 'products.json'
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) =>
              `products.json?orderBy="cat"&equalTo="${category}"`,
            transformResponse: (res) => {
              const transformedResponse = Object.values(res)
              return transformedResponse;
            },
          }),
        getProductById: builder.query({
            query: (productID) => `products.json?orderBy"id"&equalTo=${productID}`,
            transformResponse: (res) => {
                const transformedResponse = Object.values(res);
                if(transformedResponse.length) return transformedResponse[0];
              },
        })

    })
})

export const {useGetAllProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery} = ShopApi