import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isUserAuthenticated: false, hasTokenBeenSet: false };

const isLocalStorageTokenValid = !localStorage.getItem("token") ? false : true;
console.log(isLocalStorageTokenValid);

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        loggedIn(state) {
            if (isLocalStorageTokenValid) {
                state.isUserAuthenticated = isLocalStorageTokenValid;
            }
        },
        loggedOut(state) {
            if (isLocalStorageTokenValid) {
                state.isUserAuthenticated = isLocalStorageTokenValid;
            }
        }
    }
})

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice.reducer