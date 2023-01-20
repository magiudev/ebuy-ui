import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
    username: string;
    step: "idle" | "loading" | "fulfilled" | "rejected"
}= {
    username: "",
    step: "idle"
}

export const register = createAsyncThunk(
    'auth/register',
    async ({
        username,
        password
    }: {
        username: string; 
        password: string;
    }) => {
        const rawResponse = await fetch("http://localhost:5000/auth/register", {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const jsonResponse = await rawResponse.json();
        if(jsonResponse?.error) throw new Error(jsonResponse?.error)
        return jsonResponse;
    }
  );

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(register.pending, state => {
                state.step = "loading";
            })
            .addCase(register.fulfilled, (state)=> {
                state.step = "fulfilled";
            })
            .addCase(register.rejected, state => {
                state.step = "rejected"
            })

    }
})

export default authSlice;
