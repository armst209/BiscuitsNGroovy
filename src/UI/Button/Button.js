const Button = ({
  children,
  className,
  ariaLabel,
  type,
  width,
  height,
  display,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={className}
      type={type}
      aria-label={ariaLabel}
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