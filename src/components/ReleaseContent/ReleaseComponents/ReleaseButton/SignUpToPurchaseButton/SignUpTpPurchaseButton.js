//react imports
import { Link } from "react-router-dom";

//styles
import styles from "./SignUpToPurchaseButton.module.scss";

const SignUpTpPurchaseButton = () => {
  return (
    <Link className={styles["signup-to-purchase-link"]} to="/signup">
      <span>Sign Up to Purchase</span>
    </Link>
  );
};

export default SignUpTpPurchaseButton;
