import { Link } from "react-router-dom";
import "../Library/LibraryStyles.scss";

const NoReleases = () => {
  return (
    <div className="no-releases-msg">
      <h1>It looks like you have no releases yet...</h1>
      <Link to="/home#music-showcase">
        <button className="">Start Your Collection</button>
      </Link>
    </div>
  );
};

export default NoReleases;
