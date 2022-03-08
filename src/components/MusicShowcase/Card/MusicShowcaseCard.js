

//component imports
import ReleaseImage from "../../ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";


const MusicShowcaseCard = ({ release }) => {

  const { name, art_url } = release;

  return (
    <figure>
      <div
        data-testid="available-release-card"
        className="release-card"
        onClick={() =>
          window.location.replace(
            `${process.env.REACT_APP_FRONTEND_URL}/release/${release.id}/${release.name}/${release.title}/`
          )
        }
      >
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
    </figure>
  );
};

export default MusicShowcaseCard;
