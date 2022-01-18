const Button = ({
  children,
  className,
  type,
  width,
  height,
  display,
  onClickFunction,
}) => {
  return (
    <button
      onClick={!onClickFunction ? "" : () => onClickFunction()}
      className={className}
      type={type}
      style={{
        width: width,
        height: height,
        display: display,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
