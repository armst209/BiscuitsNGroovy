import NFTHover from "./NFTView/NFTHover";

const ExpiredRelease = ({ release }) => {
  return (
    <figure className="hover-img" key={`nft ${release.id}`}>
      <img src={release.art_url} alt={release.name} />
      <figcaption>
        {/* Hover state for viewing nft */}
        <NFTHover
          release={release}
          // setShowNFTPopUp={props.setShowNFTPopUp}
          // setShowEndDatePopUp={props.setShowEndDatePopUp}
        />
      </figcaption>
    </figure>
  );
};
export default ExpiredRelease;
