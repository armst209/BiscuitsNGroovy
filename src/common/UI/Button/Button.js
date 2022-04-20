import { Button as MUIButton } from "@mui/material";

import { useTheme } from "@mui/material";

const Button = ({
  children,
  id,
  ariaLabel,
  dataTestId,
  name,
  value,
  type,
  disabled,
  onClick,
  sx,
  variant,
  href,
}) => {
  const theme = useTheme();
  return (
    <MUIButton
      onClick={() => onClick()}
      id={id}
      classes={theme.components.Button.baseStyle}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      href={href}
      sx={sx}
      variant={variant}>
      {children}
    </MUIButton>
  );
};

export default Button;
