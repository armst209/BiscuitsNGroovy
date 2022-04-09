// react imports
import { HashLink } from "react-router-hash-link";

//styles
import styles from "./Vault.module.scss";

//component imports
import Title from "../../common/components/UI/Title/Title";
import VaultReleases from "./VaultReleaseList/VaultReleases";
import ScrollWidget from "../../common/components/ScrollWidget/ScrollWidget";

//seo imports
import SEOHelmet from "../../common/utils/SEO/SEOHelmet";

//Component imports

const Vault = () => {
  return (
    <>
      <SEOHelmet
        title="Vault"
        content="Explore all the biscuits we’ve dropped and the artists behind them."
      />
      <section id="vault" className={styles["vault"]}>
        <Title title={"vault"} />
        <div className={styles["vault-contents-wrapper"]}>
          <div className={styles["vault-header"]}>
            <p className={styles["vault-header-p-1"]}>
              Explore all the biscuits we’ve dropped and the artists behind them.
            </p>
            <p className={styles["vault-header-p-2"]}>
              To see releases currently available, visit the{" "}
              <HashLink className={styles["showcase-link"]} smooth to="/#music-showcase-return">
                music showcase
              </HashLink>
              .
            </p>
          </div>
          <div className={styles["vault-showcase"]}>
            <VaultReleases />
          </div>
        </div>
        <ScrollWidget />
      </section>
    </>
  );
};

export default Vault;
