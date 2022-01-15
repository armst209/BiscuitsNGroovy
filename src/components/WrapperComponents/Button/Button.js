const Button = ({ children, className, type, width }) => {
  return (
    <button className={className} type={type} width={width}>
      {children}
    </button>
  );
};

export default Button;
