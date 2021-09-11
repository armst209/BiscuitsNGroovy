import * as zxcvbn from "zxcvbn";

export function minMaxLength(text, minLength, maxLength) {
  let result = !text || text.length < minLength;
  if (maxLength) result = result || text.length < minLength;
  return result;
}

export function validEmail(text) {
  const regex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return !regex.test(text);
}

export function passwordStrength(text) {
  let result = zxcvbn(text);
  return result.score < 3;
}
