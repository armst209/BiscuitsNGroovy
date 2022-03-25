import { createSlice } from "@reduxjs/toolkit";

const initialRegistrationState = {};

const registrationSlice = createSlice({

    name: "REGISTRATION",
    initialState: initialRegistrationState,
    reducers: {

    }

});

export const { } = registrationSlice.actions;
export default registrationSlice.reducer;