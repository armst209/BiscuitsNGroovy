

//component imports
import ReleaseImage from "../../ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//Google Analytics imports
import ReactGA from "react-ga";


const MusicShowcaseCard = ({ release }) => {

  const { name, art_url, id, title } = release;

  return (
    <ReactGA.OutboundLink eventLabel={`${name}-Release`} to={`/release/${id}/${name.replaceAll(" ", "")}/${title.replaceAll(" ", "")}/`}>
      <figure>
        <div
          data-testid="available-release-card"
          className="release-card"
        >
          <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
        </div>
      </figure>
    </ReactGA.OutboundLink>
  );
};

export default MusicShowcaseCard;
