import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import cartSlice from "../features/cartSlice";
import { ShopApi } from "../services/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";
import authReducer from "../features/userSlice"

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        cart: cartSlice,
        auth: authReducer,
        [ShopApi.reducerPath]: ShopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(ShopApi.middleware)
        .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store