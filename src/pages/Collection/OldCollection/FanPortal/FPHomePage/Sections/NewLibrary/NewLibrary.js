import "../Library/LibraryStyles.scss";

import ReleaseList from "./ReleaseList";

const NewLibrary = (props) => {
  return <ReleaseList releaseData={props.releaseData} {...props} />;
};
export default NewLibrary;
