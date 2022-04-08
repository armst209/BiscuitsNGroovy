//react imports
import { Link } from "react-router-dom";

//styles
import styles from "./SignUpToPurchaseButton.module.scss";

const SignUpTpPurchaseButton = () => {
  return (
    <Link className={styles["signup-to-purchase-link"]} to="/signup">
      Sign Up to Purchase
    </Link>
  );
};

export default SignUpTpPurchaseButton;
