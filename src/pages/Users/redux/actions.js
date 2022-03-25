import { USER_LOGIN_TYPES } from "./types"

export const postingCredentials = () => {
    return { type: USER_LOGIN_TYPES.POSTING, payload: null }
}

export const postedCredentials = () => {
    return { type: USER_LOGIN_TYPES.POSTED, payload: null }

}
export const loginSuccess = (data) => {
    return { type: USER_LOGIN_TYPES.SUCCESS, payload: data }

}
export const loginError = (error) => {
    return { type: USER_LOGIN_TYPES.ERROR, payload: error }
}