import { NavLink } from "react-router-dom";

//material ui imports
import { useTheme } from "@mui/material";

const CollectionButtonMobile = ({ showMobileMenu, setShowMobileMenu }) => {
  const { components } = useTheme();
  return (
    <li>
      <NavLink
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        style={({ isActive }) => (isActive ? components.Link.mobile.activeStyle : {})}
        to="/collection"
      >
        Collection
      </NavLink>
    </li>
  );
};

export default CollectionButtonMobile;
