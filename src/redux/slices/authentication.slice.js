
import { createSlice } from "@reduxjs/toolkit";
import { loginRequest, removeLocalStorageAuthToken } from "../../services/auth.service";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../action-types/types"


const auth_token = localStorage.getItem("auth_token");

const initialAuthState = auth_token
    ? { isLoggedIn: true, auth_token }
    : { isLoggedIn: false, auth_token: null };

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,

    reducers: {

        loginSuccess(state, action) {

            const { payload } = action;
            const token = payload.token;
            localStorage.setItem("auth_token", token);
            return {
                ...state,
                isLoggedIn: true,
                auth_token: payload.token,
            };
        },
        loginFailure(state) {
            localStorage.removeItem("auth_token");
            return {
                ...state,
                isLoggedIn: false,
                auth_token: null,
            };

        },
        register(state, action) {
            const { type } = action;
            switch (type) {
                case REGISTER_SUCCESS:
                    return {
                        ...state,
                        isLoggedIn: false,
                    };
                case REGISTER_FAIL:
                    return {
                        ...state,
                        isLoggedIn: false,
                    };
                default:
                    return state;
            }
        },

        logout(state) {
            removeLocalStorageAuthToken();
            return {
                ...state,
                isLoggedIn: false,
                auth_token: null,
            };

        }

    }

},
)

export const authenticationActions = authSlice.actions;
export default authSlice.reducer
