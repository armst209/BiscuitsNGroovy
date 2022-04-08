//react imports
import { Link, Redirect } from "react-router-dom";

//svg imports
import { ReactComponent as BiscuitLove } from "common/assets/images/vinyl_yellow.svg";

//styles
import styles from "./SuccessfulBuy.module.scss";
const SuccessBuy = () => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
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
  ) : (
    <Redirect to={"/"} />
  );
};

export default SuccessBuy;
