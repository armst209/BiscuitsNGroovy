import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "./ComponentLoadingStyles.scss";

function ComponentLoading() {
  return (
    <div id="loading">
      <RecordSpinner className="rotate component-loading-svg " />
    </div>
  );
}

export default ComponentLoading;
