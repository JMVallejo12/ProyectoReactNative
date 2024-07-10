import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import cartSlice from "../features/cartSlice";
import { ShopApi } from "../services/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        cart: cartSlice,
        [ShopApi.reducerPath]: ShopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShopApi.middleware)
})

setupListeners(store.dispatch)

export default store