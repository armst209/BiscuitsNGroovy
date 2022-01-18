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
    <section id={styles["terms-of-service"]}>
      <FixedNavigationSpacer />
      <div className={styles["tos-title"]}>
        <h1>PRIVACY POLICY & TERMS OF USE </h1>
      </div>
      <TermsList />
      <Switch>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route
          exact={true}
          path="/terms-of-service"
          render={() => <Subscriber />}
        />
        <Route
          exact={true}
          path="/music-purchase-terms"
          render={() => <PurchaseOfMusic />}
        />
        <Route exact={true} path="/nft-terms" render={() => <NFTTerms />} />
      </Switch>
    </section>
  );
};

export default TermsOfService;
