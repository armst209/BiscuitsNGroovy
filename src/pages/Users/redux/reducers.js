import { USER_LOGIN_TYPES } from "./types"

const initialState = {
    data: null,
    error: null,
    status: ""
}

const userLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN_TYPES.POSTING:
            return { data: null, error: null, status: "POSTING" };
        case USER_LOGIN_TYPES.POSTED:
            return { data: null, error: null, status: "POSTED" };

        case USER_LOGIN_TYPES.SUCCESS:
            return { data: action.payload, error: null, status: "SUCCESS" }

        case USER_LOGIN_TYPES.ERROR:
            return { data: null, error: action.payload, status: "ERROR" }

        default:
            return state;

    }
}

export default userLoginReducer;