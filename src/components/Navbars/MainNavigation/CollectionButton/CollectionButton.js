import { NavLink } from "react-router-dom";

const CollectionButton = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <li>
      <NavLink
        activeStyle={{
          textDecoration: "underline 5px solid var(--color2)",
        }}
        to="/collection"
      >
        <button> Collection</button>
      </NavLink>
    </li>
  ) : (
    ""
  );
};

export default CollectionButton;
