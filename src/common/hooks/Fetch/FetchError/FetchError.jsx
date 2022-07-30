//styles
import styles from "./FetchError.module.scss";

//react imports
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const FetchError = ({ status, error }) => {

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    switch (status) {
      case 400:
        setErrorMessage(<p>OOPS! It looks like we're having trouble getting your content ready. Try restarting your internet connection or refreshing the page. If you continue to receive this message, please contact <a href="mailto:support@bngroovy.com">support@bngroovy.com</a></p>);
        break;

      case 401:
      case 403:
        setErrorMessage(<p>OOPS! It looks like you're not authorized to view this information. If believe you should have access or continue to receive this message, please contact <a href="mailto:support@bngroovy.com">support@bngroovy.com</a></p>);
        break;

      case 404:
        setErrorMessage(<p>OOPS! It seems like we can't find what your looking for. Try checking your internet connection or refreshing the page. If you continue to receive this message, please contact <a href="mailto:support@bngroovy.com">support@bngroovy.com</a></p>);
        break;

      case 408:
        setErrorMessage(<p>OOPS! Looks like your request timed out. Try checking your internet connection or refreshing the page.</p>);
        break;

      case 409:
        setErrorMessage(<p>OOPS! Looks like the username or password you entered has already been used. If you continue to receive this message, reset your password ${<Link to="https://bngroovy.com/password-recovery">here</Link>} or contact <a href="mailto:support@bngroovy.com?subject=Login Not Working">support@bngroovy.com</a></p>);
        break;

      case 429:
        setErrorMessage(<p>Too Many Requests</p>);
        break;
      case 500:
        setErrorMessage(<p>OOPS! We're not sure what happened here. Try refreshing the page. If you continue to receive this message, please contact <a href="mailto:support@bngroovy.com">support@bngroovy.com</a></p>);
        break;

      default:
        setErrorMessage(<p>OOPS! It looks like we're having trouble getting your content ready. Try restarting your internet connection or refreshing the page. If you continue to receive this message, please contact <a href="mailto:support@bngroovy.com">support@bngroovy.com</a></p>);
        break;
    }
  }, [status])


  return (
    <div className={styles["fetch-error-message"]}>
      <h2>Error: {error}</h2>
      {errorMessage}
    </div>

  );
};

export default FetchError;
