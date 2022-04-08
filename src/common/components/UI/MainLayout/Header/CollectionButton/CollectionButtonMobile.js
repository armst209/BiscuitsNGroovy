import { NavLink } from "react-router-dom";

const CollectionButtonMobile = ({ showMobileMenu, setShowMobileMenu }) => {

  return (
    <li>
      <NavLink
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        activeClassName="active-link"
        to="/collection"
      >
        Collection
      </NavLink>
    </li>
  );
};

export default CollectionButtonMobile;
