const Button = ({ children, className, type, width, height }) => {
  return (
    <button
      className={className}
      type={type}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};

export default Button;
