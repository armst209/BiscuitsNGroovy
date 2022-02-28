
//react imports
import { useEffect, useState } from "react";

//styles
import "./ScrollWidgetStyles.scss";

//svg imports
import { ReactComponent as UpArrow } from "../../assets/images/up-arrow.svg";

const ScrollWidget = () => {

  const [widgetScrollClass, setWidgetScrollClass] = useState(false);

  useEffect(() => {
    const handleWidgetScroll = () => {
      window.scrollY > 100
        ? setWidgetScrollClass("show-widget")
        : setWidgetScrollClass("");
    };

    window.addEventListener("scroll", handleWidgetScroll);

    return () => {
      window.removeEventListener("scroll", handleWidgetScroll);
    }
  }, [])

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`scroll-widget-container ${widgetScrollClass}`} onClick={() => handleScroll()}>
      <div>
        <UpArrow />
      </div>
    </div>
  );
};

export default ScrollWidget;
