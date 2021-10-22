import ReleasePreview from "../ReleasePreview/ReleasePreview";
import ComponentLoading from "../Loading/ComponentLoading";
import "./MusicShowcaseStyles.scss";

const ShowcaseList = (props) => {
  const closeReleaseInfo = () => {
    props.setReleaseInfo(!props.releaseInfo);
  };

  // Main Function - looping through response, displaying response in Homepage Releases section & creating individual "ReleasePreview"s

  return (
    <>
      {props.releaseData.data.releases.map((release) => {
        //Toggle to Close ReleasePreview

        //Set releaseInfo Hook and displays each "release" information inside "Releases" section container
        const showReleaseInfo = (release) => {
          props.setReleaseInfo(
            <ReleasePreview
              key={`release-preview ${release.id}`}
              toggleClose={closeReleaseInfo}
              songNames={release.songs}
              title={release.title}
              name={release.name}
              albumCover={release.art_url}
              description={release.description}
              id={release.id}
              price={release.price}
              //props passed in for signup pop up, if user is not logged in and tries to purchase a release
              signUpPopup={props.signUpPopup}
              showSignUpPopup={props.showSignUpPopup}
              stripeLoader={props.stripeLoader}
              setStripeLoader={props.setStripeLoader}
            />
          );
        };

        return release ? (
          <div
            onMouseEnter={() => props.setIsShown(true)}
            onMouseLeave={() => props.setIsShown(false)}
            onClick={() => showReleaseInfo(release)}
            key={`release-${release.id}`}
            className="grid-item"
          >
            <img
              className="grid-image"
              src={release.art_url}
              alt={release.name}
              key={`${"image-key" + release.id}`}
            />
          </div>
        ) : (
          <div className="loading-animation">
            <ComponentLoading />
          </div>
        );
      })}
    </>
  );
};

export default ShowcaseList;
