const Button = ({
  children,
  id,
  className,
  ariaLabel,
  dataTestId,
  type,
  width,
  height,
  onClick,
  style
}) => {
  return (
    <button
      onClick={() => onClick()}
      id={id}
      className={className}
      type={type}
      width={width}
      height={height}
      aria-label={ariaLabel}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;