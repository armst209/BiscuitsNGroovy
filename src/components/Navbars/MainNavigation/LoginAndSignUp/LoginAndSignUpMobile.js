import { NavLink, Link } from "react-router-dom";

const LoginAndSignUpMobile = ({ showMobileMenu, setShowMobileMenu }) => {
  const token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <>
      <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <NavLink
          activeStyle={{
            borderBottom: "4px solid var(--color1)",
          }}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <Link to="/signup">
          <button>
            <div>Sign Up</div>
          </button>
        </Link>
      </li>
    </>
  );
};

export default LoginAndSignUpMobile;
