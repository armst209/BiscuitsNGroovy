
//react imports
import ReactDOM from "react-dom"

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

//styles
import "./FlowLoaderStyles.scss";


const FlowLoaderModal = () => {
  return (<div id="flow-loader">
    <h1>Linking Blocto Account...</h1>
    <RecordSpinner className="rotate" />
  </div>)

}
const FlowLoader = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <FlowLoaderModal />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default FlowLoader;
