
//react imports
import ReactDOM from "react-dom"

//svg imports
import { ReactComponent as RecordSpinner } from "../../assets/images/compact-disc-yellow.svg";

//styles
import "./LoadingStyles.scss";

const LoadingModal = () => {
  return (
    <div className="loader-wrapper">
      <RecordSpinner className="rotate component-loading-svg" />
    </div>
  )

}

const Loading = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <LoadingModal />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
}

export default Loading;
