//react imports
import { NavLink } from "react-router-dom";

//styles
import "../MobileNavigation/MobileNavigationStyles.scss";

//redux imports
import { useSelector } from "react-redux";

const LoginAndSignUpMobile = ({ showMobileMenu, setShowMobileMenu }) => {

  const isUserAuthenticated = useSelector(state => state.authentication.isUserAuthenticated);

  return !isUserAuthenticated ? (
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
  ) : null;
};

export default LoginAndSignUpMobile;
