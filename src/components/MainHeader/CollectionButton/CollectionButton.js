
//react imports
import { NavLink } from "react-router-dom";

const CollectionButton = () => {

  return (

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

  )

};

export default CollectionButton;
