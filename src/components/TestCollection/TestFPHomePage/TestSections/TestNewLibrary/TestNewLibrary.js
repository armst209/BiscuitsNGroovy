import "../TestLibrary/TestNewLibraryStyles.scss";

import ReleaseList from "./TestReleaseList/TestReleaseList";

const NewLibrary = (props) => {
  return <ReleaseList releaseData={props.releaseData} {...props} />;
};
export default NewLibrary;
