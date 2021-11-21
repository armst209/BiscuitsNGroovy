import { ReactComponent as PulseLoader } from "../../../assets/images/pulse_loader.svg";
import "./FlowLoaderStyles.scss";

const FlowLoader = () => {
  return (
    <div id="flow-loader">
      <div className="flow-loader-wrapper">
        <PulseLoader />
      </div>
    </div>
  );
};

export default FlowLoader;
