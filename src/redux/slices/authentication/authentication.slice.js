
import { createSlice } from "@reduxjs/toolkit";

const isAuthTokenSet = !localStorage.getItem("auth_token") ? false : true;

const initialAuthState = isAuthTokenSet
    ? { isLoggedIn: true, hasToken: true }
    : { isLoggedIn: false, hasToken: false };

const authSlice = createSlice({
    name: "AUTHENTICATION",
    initialState: initialAuthState,
    reducers: {

        USER_AUTHENTICATED: (state, action) => {
            localStorage.setItem("auth_token", action.payload);
            return { ...state, isLoggedIn: true, hasToken: action.payload ? true : false }
        },
        USER_NOT_AUTHENTICATED: (state) => {
            localStorage.removeItem("auth_token");
            return { ...state, isLoggedIn: false, hasToken: false }
        }

    }

});

export const authenticationActions = authSlice.actions;
export default authSlice.reducer
