import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "./FormLoaderStyles.scss";

const FormLoader = () => {
  return (
    <div id="form-loading">
      <div className="form-loading-wrapper">
        <RecordSpinner className="rotate" />
        <div>Sending...</div>
      </div>
    </div>
  );
};

export default FormLoader;
