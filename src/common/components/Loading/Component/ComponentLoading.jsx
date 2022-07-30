
//react imports
import ReactDOM from "react-dom";

//styles
import "./ComponentLoadingStyles.scss";

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

const ComponentLoadingModal = () => {
  return (
    <div data-testid="component-loading" id="loading">
      <RecordSpinner className="rotate component-loading-svg " />
    </div>
  )
}

const ComponentLoading = () => {
  return (

    <>
      {ReactDOM.createPortal(
        <ComponentLoadingModal />,
        document.getElementById("modal-overlay-root")
      )}
    </>

  );
}

export default ComponentLoading;
