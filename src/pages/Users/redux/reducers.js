import { USER_LOGIN_TYPES } from "./types"

const initialState = {
    data: null,
    error: null,
    status: ""
}

const userLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN_TYPES.POSTING:
            return { data: null, error: null, status: USER_LOGIN_TYPES.POSTING };
        case USER_LOGIN_TYPES.POSTED:
            return { data: null, error: null, status: USER_LOGIN_TYPES.POSTED };

        case USER_LOGIN_TYPES.SUCCESS:
            return { data: action.payload, error: null, status: USER_LOGIN_TYPES.SUCCESS }

        case USER_LOGIN_TYPES.ERROR:
            return { data: null, error: action.payload, status: USER_LOGIN_TYPES.ERROR }

        default:
            return state;

    }
}

export default userLoginReducer;