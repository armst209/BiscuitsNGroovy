

//component imports
import TermsList from "./TermsList";

//styles
import styles from "./TermsOfService.module.scss";
import SEOHelmet from "../../utils/SEO/SEOHelmet";

const TermsOfService = () => {
  return (
    /**
     * TODO: add possible nested routes
     */
    <section id={styles["terms-of-service"]} className="_main_section">
      <SEOHelmet title="Privacy Police & Terms of Use" content="" />
      <div className={styles["tos-title"]}>
        <h1>PRIVACY POLICY & TERMS OF USE </h1>
      </div>
      <TermsList />

    </section>
  );
};

export default TermsOfService;
