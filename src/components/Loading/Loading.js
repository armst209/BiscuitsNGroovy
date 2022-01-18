import { ReactComponent as RecordSpinner } from "../../assets/images/compact-disc-yellow.svg";

import "./LoadingStyles.scss";

function Loading() {
  return (
    <div className="loader-wrapper">
      <RecordSpinner className="rotate component-loading-svg" />
    </div>
  );
}

export default Loading;
