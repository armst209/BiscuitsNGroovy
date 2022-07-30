//svg imports
import { ReactComponent as MagnifyingGlass } from "../../common/assets/images/search_white.svg";

//seo imports
import SEOHelmet from "../../common/utils/SEO/SEOHelmet";

//styles
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div id={styles["not-found"]}>
      <SEOHelmet title="Not Found" content="" />
      <div className={styles["not-found-content"]}>
        <h1>Sorry, we can't find the page you were looking for...</h1>
        <MagnifyingGlass />
      </div>
    </div>
  );
}

export default NotFound;
