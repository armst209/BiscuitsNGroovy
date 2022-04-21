//react imports
import { Link, Navigate } from "react-router-dom";

//svg imports
import { ReactComponent as BiscuitLove } from "common/assets/images/vinyl_yellow.svg";

//redux imports
import { useSelector } from "react-redux";

//styles
import styles from "./SuccessfulBuy.module.scss";

/**
 * TODO: figure out logic for purchasing a release, probably needs "purchased" check in local storage or release object
 *
 */
const SuccessBuy = () => {
  const isUserAuthenticated = useSelector((state) => state.bng_user.authentication.isAuthenticated);

  if (!isUserAuthenticated) {
    return <Navigate replace to={"/"} />;
  }

  return (
    <section id={styles["purchase-success"]}>
      <div className={styles["purchase-success-content"]}>
        <h1>Thank you for your purchase!</h1>
        <p>Head to your collection to start groovin'!</p>
        <Link to="/collection">
          <button className="_button">
            <span className="collection-button">Head to Collection</span>
          </button>
        </Link>
        <BiscuitLove />
      </div>
    </section>
  );
};

export default SuccessBuy;
