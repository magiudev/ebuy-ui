import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfItems: 0 
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default cartSlice;