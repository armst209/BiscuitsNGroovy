
//redux imports
import { configureStore } from "@reduxjs/toolkit"
//thunk
import thunk from "redux-thunk";

//reducers
import authenticationReducer from "../slices/authentication/authentication.slice";
import userRegistrationReducer from "../slices/registration/registration.slice"
import userLoginReducer from "../../pages/Users/redux/reducers";


const store = configureStore({
    reducer: {
        login: userLoginReducer,
        registration: userRegistrationReducer,
        authentication: authenticationReducer
    },
    middleware: [thunk],
})

console.log(store.getState());

export default store;