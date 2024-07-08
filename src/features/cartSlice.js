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
            state.value.cart = action.payload
            console.log(state.value.cart)
        }
    },
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer