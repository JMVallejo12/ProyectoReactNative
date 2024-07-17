import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderItems: [],
    },
    reducers: {
        addToOrder: (state, action) => {
            const { name, price, quantity } = action.payload;
            const existingItem = state.orderItems.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice = existingItem.quantity * price;
            } else {
                state.orderItems.push({ name, price, quantity, totalPrice: price * quantity });
            }
        }
    }
});

export const { addToOrder } = orderSlice.actions;
export default orderSlice.reducer;
