import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import { ReactComponent as BloctoLogo } from "../../../assets/images/blocto-social.svg";
import "./FlowLoaderStyles.scss";

const FlowLoader = () => {
  return (
    <div id="flow-loader">
      <div>Getting Blocto ready</div>
      <BloctoLogo />
      <RecordSpinner className="rotation-forward" />
    </div>
  );
};

export default FlowLoader;
