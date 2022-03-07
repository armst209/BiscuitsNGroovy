
interface buttonProps{
  children:any,
  id:string | undefined
  className: string | undefined,
  onClick: ()=> void,
  style: React.CSSProperties | undefined,
  name: string | undefined,
  value: string | number | readonly string[]| undefined,
  type: "button"| "submit"| "reset"| undefined,
  dataTestId: string| undefined,
  ariaLabel:string | undefined,
}


const Button = ({
  children,
  id,
  className,
  ariaLabel,
  dataTestId,
  name,
  value,
  type,
  onClick,
  style
}:buttonProps) => {
  return (
    <button
      onClick={() => onClick()}
      id={id}
      className={className}
      type={type}
      name={name}
      value={value}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;