import { Link } from "react-router-dom";

const NoReleasesCollection = () => {
  return (
    <div className="no-releases-msg">
      <h1>It looks like you have no releases yet...</h1>
      <Link to="/#music-showcase">
        <button>Start Your Collection</button>
      </Link>
    </div>
  );
};

export default NoReleasesCollection;
