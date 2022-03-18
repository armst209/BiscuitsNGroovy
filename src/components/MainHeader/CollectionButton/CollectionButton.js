
//react imports
import { NavLink } from "react-router-dom";

//redux imports
import { useSelector } from "react-redux";

const CollectionButton = () => {

  const isUserAuthenticated = useSelector(state => state.authentication.isUserAuthenticated)
  return (
    isUserAuthenticated ? (
      <li>
        <NavLink
          activeStyle={{
            borderBottom: "2px solid var(--color1)",
          }}
          to="/collection"
        >
          <div> Collection</div>
        </NavLink>
      </li >
    ) : null
  )

};

export default CollectionButton;
