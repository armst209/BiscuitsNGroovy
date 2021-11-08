import { NavLink } from "react-router-dom";

const CollectionButtonMobile = ({ showMobileMenu, setShowMobileMenu }) => {
  const token = localStorage.getItem("token");
  return token ? (
    <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
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

export default CollectionButtonMobile;
