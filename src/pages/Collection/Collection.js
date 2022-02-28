//styles
import styles from "./Collection.module.scss";

//component imports
import Title from "../../UI/Title/Title";

//utility imports
import CollectionReleases from "./ReleaseList/CollectionReleases";



const Collection = () => {

  return (
    <section id={styles.collection} className="_main_section">
      <Title title={"collection"} />
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
