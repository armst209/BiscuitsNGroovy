
//react imports
import ReactDOM from "react-dom"

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

//styles
import "./FormLoaderStyles.scss";

const FormLoaderModal = () => {
  return (
    <div id="form-loading">
      <div className="form-loading-wrapper">
        <RecordSpinner className="rotate" />
        <div>Sending...</div>
      </div>
    </div>
  )

}

const FormLoader = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <FormLoaderModal />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default FormLoader;
