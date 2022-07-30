//react imports
import { NavLink } from "react-router-dom";

//material ui imports
import { useTheme } from "@mui/material";

const CollectionButton = () => {
  const { components } = useTheme();
  return (
    <li>
      <NavLink
        style={({ isActive }) => (isActive ? components.Link.activeStyle : {})}
        to="/collection"
      >
        Collection
      </NavLink>
    </li>
  );
};

export default CollectionButton;
