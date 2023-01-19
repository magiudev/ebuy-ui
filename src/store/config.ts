import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store;
export type AppState = ReturnType<typeof store.getState>;
