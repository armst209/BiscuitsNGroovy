// react imports
import { HashLink } from "react-router-hash-link";

//styles
import styles from "./Vault.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";

import VaultReleaseList from "../../components/ReleaseContent/ReleaseComponents/ReleaseLists/VaultReleaseList/VaultReleaseList";

//Component imports

const Vault = () => {
  return (
    <section id="vault" className={`_main_section ${styles["vault"]}`}>
      <div className={styles["vault-title"]}>
        <h1>
          <RecordVinyl data-testid="record-svg" width="50px" />
          <div>VAULT</div>
        </h1>
      </div>
      <div className={styles["vault-contents-wrapper"]}>
        <div className={styles["vault-header"]}>
          <p className={styles["vault-header-p-1"]}>
            The vault is a repository of all <span>past</span> releases on BnG.
            Take a look at the <span>artist</span> we have worked with thus far.
          </p>
          <p className={styles["vault-header-p-2"]}>
            To see releases currently available, visit the{" "}
            <HashLink
              className={styles["showcase-link"]}
              smooth
              to="/#music-showcase-return"
            >
              music showcase
            </HashLink>
            .
          </p>
        </div>
        <div className={styles["vault-showcase"]}>
          <VaultReleaseList />
        </div>
      </div>
    </section>
  );
};

export default Vault;
