import { ReactComponent as PulseLoader } from "../../../assets/images/pulse_loader.svg";
import "./FormLoaderStyles.scss";

const FormLoader = () => {
  return (
    <div id="form-loading">
      <div className="form-loading-wrapper">
        <PulseLoader />
        <div>Sending...</div>
      </div>
    </div>
  );
};

export default FormLoader;
