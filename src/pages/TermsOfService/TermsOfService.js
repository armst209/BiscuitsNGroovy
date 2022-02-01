//react imports
import { Switch, Route } from "react-router-dom";

//component imports
import PrivacyPolicy from "./Terms/PrivacyPolicy/PrivacyPolicy";
import PurchaseOfMusic from "./Terms/PurchaseOfMusic";
import NFTTerms from "./Terms/NFTTerms";
import Subscriber from "./Terms/Subscriber";
import TermsList from "./TermsList";

//styles
import styles from "./TermsOfService.module.scss";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

const TermsOfService = () => {
  return (
    /**
     * TODO: add possible nested routes
     */
    <section id={styles["terms-of-service"]}>
      <FixedNavigationSpacer />
      <div className={styles["tos-title"]}>
        <h1>PRIVACY POLICY & TERMS OF USE </h1>
      </div>
      <TermsList />
      <Switch>
        <Route path="/privacy-policy" component={<PrivacyPolicy />} />

        <Route exact path="/terms-of-service" component={<Subscriber />} />
        <Route
          exact
          path="/music-purchase-terms"
          component={<PurchaseOfMusic />}
        />
        <Route exact path="/nft-terms" component={<NFTTerms />} />
      </Switch>
    </section>
  );
};

export default TermsOfService;
