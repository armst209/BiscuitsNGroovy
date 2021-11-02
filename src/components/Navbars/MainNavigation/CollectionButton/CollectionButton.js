import { Link } from "react-router-dom";

const CollectionButton = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <ul className="desktop-main-links">
      <li>
        <Link to="/collection">
          <button> Collection</button>
        </Link>
      </li>
    </ul>
  ) : (
    ""
  );
};

export default CollectionButton;
