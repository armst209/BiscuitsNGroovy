
//redux imports
import { configureStore } from "@reduxjs/toolkit"

//slices
import authenticationReducer from "../slices/authentication.slice"

const store = configureStore({
    reducer: { authentication: authenticationReducer }
})


export default store;