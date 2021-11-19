// import * as zxcvbn from "zxcvbn";

export function minMaxLength(text, minLength, maxLength) {
  let result = !text || text.length < minLength;
  if (maxLength) result = result || text.length < minLength;
  return result;
}

export function validEmail(email) {
  const regex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return !regex.test(email);
}

export function passwordStrength(text) {
  // let result = zxcvbn(text);
  // return result.score < 3;
}

//password validation for both password inputs
export function validateConfirmPassword(password, confirmpassword) {
  // formErrors = formErrors || {};
  if (password !== confirmpassword) {
    // formErrors.confirmpassword =
    //   "Confirmed password is not matching with password";
    return false;
  } else {
    // delete formErrors.confirmpassword;
    return true;
  }
}

const registeredUsers = [];
function userExists(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (registeredUsers.findIndex((u) => u === email) !== -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}
