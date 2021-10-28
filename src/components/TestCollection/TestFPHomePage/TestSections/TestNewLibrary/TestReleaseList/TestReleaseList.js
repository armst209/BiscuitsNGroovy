import { useState } from "react";
import AlbumCoverHover from "./TestReleaseListViews/HoverState/Album/TestAlbumCoverHover";
import NFTHover from "./TestReleaseListViews/HoverState/NFT/TestNFTHover.js";

const ReleaseList = (props) => {
  const [albumInfo, setAlbumInfo] = useState(false);
  const [albumCovers, setAlbumCovers] = useState("");

  //Toggle to Close AlbumPopUp
  const closeAlbumInfo = () => {
    setAlbumCovers("");
  };

  return (
    <>
      {props.releaseData.library.map((release) => {
        //if release is disabled it just shows nft, if not full release and access to music player is allowed -
        if (release.isExpired === false) {
          return (
            //Return - what's currently being displayed in the "Your Library" section through Hooks

            <figure className="hover-img" key={`hover-figure-${release.id}`}>
              <img src={release.art_url} alt={release.name} />
              <figcaption>
                {/* Hover state for release */}
                <AlbumCoverHover
                  closeButton={props.popUpPassed}
                  setAlbumInfo={setAlbumInfo}
                  albumInfo={albumInfo}
                  release={release}
                  toggle={closeAlbumInfo}
                  showReleasePopUp={props.popUpPassed}
                />
              </figcaption>
            </figure>
          );
        } else {
          return (
            //only for hover, does not pass in props or show popup on click like AlbumCoverHover
            <figure className="hover-img" key={`nft ${release.id}`}>
              <img src={release.art_url} alt={release.name} />
              <figcaption>
                {/* Hover state for viewing nft */}
                <NFTHover
                  release={release}
                  setShowNFTPopUp={props.setShowNFTPopUp}
                  setShowEndDatePopUp={props.setShowEndDatePopUp}
                />
              </figcaption>
            </figure>
          );
        }
      })}
    </>
  );
};

export default ReleaseList;
