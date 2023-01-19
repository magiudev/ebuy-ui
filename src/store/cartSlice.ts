import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./config";

const initialState = {
    numberOfItems: 0 
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setNumberOfItems: function(state, data: PayloadAction<number>) {
            state.numberOfItems = data.payload;
        }
    }
})

export default cartSlice;
export const { setNumberOfItems } = cartSlice.actions;
export const selectNumberOfCartItems = (state: AppState) => state.cart.numberOfItems;
