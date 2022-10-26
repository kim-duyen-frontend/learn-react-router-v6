import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});
setupListeners(store.dispatch);