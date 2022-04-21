//component imports
import Header from "./Header/MainHeader";
import Footer from "./Footer/Footer";

//material ui imports
import { Container } from "@mui/material";
import { useTheme } from "@mui/material";

const MainLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Container component="main" sx={theme.components.Main.baseStyle}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
