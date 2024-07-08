import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import cartSlice from "../features/cartSlice";

export default configureStore({
    reducer: {
        counter: CounterSlice,
        cart: cartSlice,
    }
})