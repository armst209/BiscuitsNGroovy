import { NavLink } from "react-router-dom";

const CollectionButtonMobile = ({ showMobileMenu, setShowMobileMenu }) => {
  const token = localStorage.getItem("token");
  return token ? (
    <li>
      <NavLink
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        activeClassName="active-link"
        to="/collection"
      >
        Collection
      </NavLink>
    </li>
  ) : (
    ""
  );
};

export default CollectionButtonMobile;
