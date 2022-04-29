//styles
import "./_global.css";
import "@fortawesome/fontawesome-free/js/all"; //for social media icons

//route imports
import AllRoutes from "./Routes/Router";
import routes from "./Routes/routesConfiguration";

//component imports
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import MainLayout from "@common/UI/MainLayout/MainLayout";

const App = () => {
  return (
    <article>
      <ScrollToTop />
      <MainLayout>
        <AllRoutes routes={routes} />
      </MainLayout>
    </article>
  );
};

export default App;
