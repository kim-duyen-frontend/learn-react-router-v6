import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://reqres.in"
    }),
    endpoints: (builder) => ({
        signinUser: builder.mutation({
            query: (body) => {
                return{
                    url: "/api/login",
                    method: "post",
                    body
                };
            }
        })
    })
})
export const { useSigninUserMutation } = authApi;