//component imports
import ReleaseImage from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//Google Analytics imports
// import ReactGA from "react-ga";
import { Link } from "react-router-dom";

const MusicShowcaseCard = ({ release }) => {
  const { name, art_url, id, title } = release;

  return (
    <Link
      eventLabel={`${name}-Release`}
      to={`/release/${id}/${name.replaceAll(" ", "")}/${title.replaceAll(" ", "")}/`}>
      <figure>
        <div data-testid="available-release-card" className="release-card">
          <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
        </div>
      </figure>
    </Link>
  );
};

export default MusicShowcaseCard;
