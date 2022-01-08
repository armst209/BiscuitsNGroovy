import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "./FlowLoaderStyles.scss";

const FlowLoader = () => {
  return (
    <div id="flow-loader">
      <h1>Linking Blocto Account...</h1>
      <RecordSpinner className="rotate" />
    </div>
  );
};

export default FlowLoader;
