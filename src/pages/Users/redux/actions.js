
import { USER_LOGIN, USER_REGISTRATION, USER_AUTHENTICATION } from "./types"

export const postingCredentials = () => {
    return { type: USER_LOGIN.POSTING, payload: null }
}

export const postedCredentials = () => {
    return { type: USER_LOGIN.POSTED, payload: null }

}
export const loginSuccess = (data) => {
    return { type: USER_LOGIN.SUCCESS, payload: data }

}
export const loginError = (error) => {
    return { type: USER_LOGIN.ERROR, payload: error }
}

export const userLoggedIn = () => {
    return { type: USER_LOGIN.LOGGED_IN, payload: null }
}

export const userLoggedOut = () => {
    return { type: USER_LOGIN.LOGGED_OUT, payload: null }
}

export const userAuthenticated = (data) => {
    return { type: USER_AUTHENTICATION.AUTHENTICATED, payload: data }
}

export const authenticatingUser = () => {
    return { type: USER_AUTHENTICATION.AUTHENTICATING, payload: null };
}

export const userNotAuthenticated = () => {
    return { type: USER_AUTHENTICATION.NOT_AUTHENTICATED, payload: null }
}