import "./ScrollWidgetStyles.scss";

const ScrollWidget = () => {
  const handleScroll = (event) => {
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={(event) => handleScroll(event)} id="scroll-widget-container">
      <div>+</div>
    </div>
  );
};

export default ScrollWidget;
