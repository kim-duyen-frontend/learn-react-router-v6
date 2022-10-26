import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    token: "",
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload;
            state.token = action.payload.token;
            console.log("receive data of ui: ", action);
        },
        defaultState: (state) => {
            state = initialState;
        },
    },
});

export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;