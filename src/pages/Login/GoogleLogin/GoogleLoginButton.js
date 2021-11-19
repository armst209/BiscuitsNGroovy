import { GoogleLogin } from "react-google-login";
import { googleRefreshTokenSetup } from "../../../utils/GoogleRefreshTokenSetup/GoogleRefreshTokenSetup";

const onSuccess = (res) => {
  console.log("[Login Success] currentUser:", res.profileObj);
  googleRefreshTokenSetup(res);
};

const onFailure = (res) => {
  console.log("[Login Failed] res:", res);
};
const GoogleLoginButton = () => {
  //=========GOOGLE CLIENT ID=========
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  //=========GOOGLE CLIENT ID=========
  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default GoogleLoginButton;
