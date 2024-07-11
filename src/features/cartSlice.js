import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        value: {
            cart: [],
        }
    },
    reducers: {
        addToCart: (state,action)=>{
            state.value.cart.push(action.payload)
        }
    },
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer