import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import { ReactComponent as BloctoLogo } from "../../../assets/images/blocto-social.svg";
import "./FlowLoaderStyles.scss";

const FlowLoader = () => {
  return (
    <div id="flow-loader">
      <RecordSpinner className="rotate" />
    </div>
  );
};

export default FlowLoader;
