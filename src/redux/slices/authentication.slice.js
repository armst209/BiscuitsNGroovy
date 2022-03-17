import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isUserAuthenticated: false, hasTokenBeenSet: false };

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        loggedIn(state) {
            state.isUserAuthenticated = true;
            state.hasTokenBeenSet = true;
        },
        loggedOut(state) {
            state.isUserAuthenticated = false;
            state.hasTokenBeenSet = false;
        }
    }
})

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice.reducer