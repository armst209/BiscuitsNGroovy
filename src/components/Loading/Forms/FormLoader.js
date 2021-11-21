import { ReactComponent as PulseLoader } from "../../../assets/images/pulse_loader.svg";
import "./FormLoaderStyles.scss";

const FormLoader = () => {
  return (
    <div id="form-loader">
      <div className="form-loader-wrapper">
        <PulseLoader />
        <div>Sending...</div>
      </div>
    </div>
  );
};

export default FormLoader;
