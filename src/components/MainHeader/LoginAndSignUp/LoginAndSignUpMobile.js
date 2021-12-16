import { NavLink } from "react-router-dom";
import "../MobileNavigation/MobileNavigationStyles.scss";

const LoginAndSignUpMobile = ({ showMobileMenu, setShowMobileMenu }) => {
  let token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <>
      <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <NavLink activeClassName="active-link" to="/signin">
          Sign In
        </NavLink>
      </li>
      <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <NavLink activeClassName="active-link" to="/signup">
          <div>Sign Up</div>
        </NavLink>
      </li>
    </>
  );
};

export default LoginAndSignUpMobile;
