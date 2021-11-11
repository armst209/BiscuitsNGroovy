import { NavLink } from "react-router-dom";
import "./CollectionNavigationStyles.scss";

const CollectionNavigation = () => {
  return (
    <ul id="collection-navigation-ul">
      <li>
        <NavLink to="/">Link</NavLink>
      </li>
      <li>
        <NavLink to="/">Link</NavLink>
      </li>
      <li>
        <NavLink to="/">Link</NavLink>
      </li>
      <li>
        <NavLink to="/">Link</NavLink>
      </li>
      <li>
        <NavLink to="/">Link</NavLink>
      </li>
    </ul>
  );
};

export default CollectionNavigation;
