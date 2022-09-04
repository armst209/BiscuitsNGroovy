//component imports
import ReleaseImage from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//Google Analytics imports
// import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const MusicShowcaseCard = ({ release }) => {
  const { artist, id, albumTitle } = release;

  return (
    <Link>
      <figure>
        <div data-testid="available-release-card" className="release-card">
          // <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
          <Box>
            {artist} - {albumTitle}
          </Box>
        </div>
      </figure>
    </Link>
  );
};

export default MusicShowcaseCard;
