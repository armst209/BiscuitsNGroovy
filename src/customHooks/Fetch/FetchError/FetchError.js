//styles
import styles from "./FetchError.module.scss";

const FetchError = () => {
  return (
    <p className={styles["fetch-error-message"]}>
      OOPS! It looks like we're having trouble getting your content ready.
      Refresh the page or try again later.
    </p>
  );
};

export default FetchError;
