import { NavLink, Link } from "react-router-dom";

const LoginAndSignUp = () => {
  const token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <ul className="desktop-main-links">
      <li>
        <NavLink
          activeStyle={{
            borderBottom: "4px solid var(--color1)",
          }}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li>
        <Link to="/signup">
          <button>
            <div>Sign Up</div>
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default LoginAndSignUp;
