import { Link, Redirect } from "react-router-dom";
import { ReactComponent as BiscuitLove } from "../../assets/images/vinyl_yellow.svg";
import Button from "../../components/WrapperComponents/Button/Button";
import "./SuccessfulBuyStyles.scss";
function SuccessBuy() {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <section id="purchase-success">
      <div className="purchase-success-content">
        <h1>Thank you for your purchase!</h1>
        <p>Head to your collection to start groovin'!</p>
        <Link to="/collection">
          <Button width="200px" className="_button">
            <span className="collection-button">Head to Collection</span>
          </Button>
        </Link>
        <BiscuitLove />
      </div>
    </section>
  ) : (
    <Redirect to={"/"} />
  );
}

export default SuccessBuy;
