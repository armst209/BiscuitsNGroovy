export let token = !JSON.parse(localStorage.getItem("bng_user"))
  ? null
  : JSON.parse(localStorage.getItem("bng_user")).authentication.token;
export let PR_Auth_Token = localStorage.getItem("PR_Auth_Token");
