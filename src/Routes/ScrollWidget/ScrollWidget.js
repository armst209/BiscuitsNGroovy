
//react imports
import "./ScrollWidgetStyles.scss";
import { ReactComponent as UpArrow } from "../../assets/images/up-arrow.svg";

const ScrollWidget = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div onClick={() => handleScroll()} id="scroll-widget-container">
      <div>
        <UpArrow />
      </div>
    </div>
  );
};

export default ScrollWidget;
