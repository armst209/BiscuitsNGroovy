//styles
import styles from "./Collection.module.scss";

//component imports
import CollectionTitle from "./Title/CollectionTitle";

//utility imports
import CollectionReleases from "./ReleaseList/CollectionReleases";


const Collection = () => {

  return (
    <section id={styles.collection} className="_main_section">
      <CollectionTitle />
      <div className={styles["collection-nav-grid"]}>
        <div className={styles["collection-container"]}>
          <div className={styles["collection-library-grid-wrapper"]}>
            <div className={styles["collection-library-grid"]}>
              <CollectionReleases />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Collection;
