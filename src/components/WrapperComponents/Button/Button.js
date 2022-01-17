const Button = ({
  children,
  className,
  type,
  width,
  height,
  noDisplay,
  onClickFunction,
}) => {
  return (
    <button
      onClick={!onClickFunction ? "" : () => onClickFunction()}
      className={className}
      type={type}
      style={{ width: width, height: height, display: noDisplay }}
    >
      {children}
    </button>
  );
};

export default Button;
