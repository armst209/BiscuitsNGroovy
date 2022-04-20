//component imports
import Header from "./Header/MainHeader";
import Footer from "./Footer/Footer";

//routes
import AllRoutes from "Routes/Router";
import routes from "Routes/routeConfig";

//material ui imports
import { Container } from "@mui/material";
import { useTheme } from "@mui/material";

const MainLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Container component="main" sx={theme.components.Main.baseStyle}>
        <AllRoutes routes={routes} />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
