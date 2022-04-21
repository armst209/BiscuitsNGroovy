//react imports
import { NavLink } from "react-router-dom";

//material ui imports
import { useTheme } from "@mui/material";
const LoginAndSignUpMobile = ({ showMobileMenu, setShowMobileMenu }) => {
  const { components } = useTheme();
  return (
    <>
      <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <NavLink
          style={({ isActive }) => (isActive ? components.Link.mobile.activeStyle : {})}
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
      <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <NavLink
          style={({ isActive }) => (isActive ? components.Link.mobile.activeStyle : {})}
          to="/signup"
        >
          <div>Sign Up</div>
        </NavLink>
      </li>
    </>
  );
};

export default LoginAndSignUpMobile;
