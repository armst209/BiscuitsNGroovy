import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "./ComponentLoadingStyles.scss";

function ComponentLoading() {
  return (
    <div data-testid="component-loading"id="loading">
      <RecordSpinner  className="rotate component-loading-svg " />
    </div>
  );
}

export default ComponentLoading;
