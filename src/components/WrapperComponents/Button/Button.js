const Button = ({
    children,
    className,
    type,
    width,
    height,
    display,
    onClickFunction,
    onClickFunction2,
  }) => {
    return (
      <button
        onClick={
          !onClickFunction
            ? ""
            : () => {
                onClickFunction();
                onClickFunction2();
              }
        }
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