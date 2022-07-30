//styles
import "./_global.css";
import "@fortawesome/fontawesome-free/js/all"; //for social media icons

//route imports

//component imports
import ScrollToTop from "./common/components/ScrollToTop/ScrollToTop";
import MainLayout from "./common/UI/MainLayout/MainLayout";

//Google Analytics import
// import PageViewsTracking from "./common/utils/GoogleAnalytics/PageViewsTracking";
import RoutesConfiguration from "./Routes/RoutesConfiguration";

const App = () => {
  return (
    // <PageViewsTracking>

    <article>
      <ScrollToTop />
      <MainLayout>
        <RoutesConfiguration />
      </MainLayout>
    </article>
    // </PageViewsTracking>
  );
};

export default App;
