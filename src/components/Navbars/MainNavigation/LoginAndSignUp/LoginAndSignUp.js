import { NavLink, Link } from "react-router-dom";

const LoginAndSignUp = () => {
  const token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <>
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
    </>
  );
};

export default LoginAndSignUp;
