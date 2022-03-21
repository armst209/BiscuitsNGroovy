//react imports
import { NavLink } from "react-router-dom";

//styles
import "../MobileNavigation/MobileNavigationStyles.scss";


const LoginAndSignUpMobile = ({ showMobileMenu, setShowMobileMenu }) => {



  return (
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
  )
};

export default LoginAndSignUpMobile;
