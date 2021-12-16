import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "./FlowLoaderStyles.scss";

const FlowLoader = () => {
  return (
    <div id="flow-loader">
      <div className="flow-loader-wrapper">
        <RecordSpinner />
      </div>
    </div>
  );
};

export default FlowLoader;
