//styles
import styles from "./FetchError.module.scss";
//svg imports

const FetchError = ({errorMessage}) => {
  return (
    <>
      <p className={styles["fetch-error-message"]}>
        OOPS! It looks like we're having trouble getting your content ready. Try
        restarting your internet connection or refreshing the page.
      </p>
    </>
  );
};

export default FetchError;
