import { NavLink } from "react-router-dom";

const CollectionButton = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <li>
      <NavLink
        activeStyle={{
          borderBottom: "2px solid var(--color1)",
        }}
        to="/collection"
      >
        <div> Collection</div>
      </NavLink>
    </li>
  ) : (
    ""
  );
};

export default CollectionButton;
