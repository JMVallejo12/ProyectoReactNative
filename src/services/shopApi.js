import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../database/realtimeDatabase' 

export const ShopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['ProfileImage', 'Order'], 
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products.json'
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
                if (transformedResponse.length) return transformedResponse[0];
            },
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                }
            }),
            invalidatesTags: ["ProfileImage"]
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ["ProfileImage"]
        }),
        postOrder: builder.mutation({
            query: (order) =>({
                url: "orders.json",
                method: "POST",
                body: order
            })
        }),
        getOrder: builder.query({
            query: () => "orders.json",
            transformResponse: (res) => {
                const transformedResponse = Object.values(res)
                return transformedResponse;
            },
        })

    })
})

export const {useGetAllProductsQuery,useGetCategoriesQuery,useGetProductsByCategoryQuery,useGetProductByIdQuery,usePostProfileImageMutation,useGetProfileImageQuery, usePostOrderMutation, useGetOrderQuery} = ShopApi
