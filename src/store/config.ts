import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store;
export type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
