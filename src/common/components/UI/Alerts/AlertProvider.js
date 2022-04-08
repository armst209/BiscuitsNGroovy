import { SnackbarProvider } from "notistack";

const AlertProvider = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={4}
      domRoot={document.getElementById("react-snackbar-notifications")}>
      {children}
    </SnackbarProvider>
  );
};

export default AlertProvider;
