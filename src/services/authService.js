import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseAuthUrl, apiKey } from "../database/realtimeDatabase"


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        singUp: builder.mutation({
            query: (auth) => ({
                url: `/accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: auth
            })
        })
    })
})

export const {useSingUpMutation} = authApi