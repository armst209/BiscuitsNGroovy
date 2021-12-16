import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "../LoadingStyles.scss";

function ComponentLoading() {
  return (
    <div id="loading">
      <RecordSpinner />
    </div>
  );
}

export default ComponentLoading;
