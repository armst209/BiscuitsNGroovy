import {
  USER_AUTHENTICATION
} from "./types";

export const userAuthenticated = (data) => {
  return {
    type: USER_AUTHENTICATION.AUTHENTICATED,
    payload: data
  };
};

export const authenticatingUser = () => {
  return {
    type: USER_AUTHENTICATION.AUTHENTICATING,
    payload: null
  };
};

export const userNotAuthenticated = () => {
  return {
    type: USER_AUTHENTICATION.NOT_AUTHENTICATED,
    payload: null
  };
};