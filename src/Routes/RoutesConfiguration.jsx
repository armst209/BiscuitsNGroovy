import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";

//component imports
import About from "@/pages/About/About";
import Artists from "@/pages/Artists/Artists";
import FAQ from "@/pages/FAQ/FAQ";
import Homepage from "@/pages/Home/Homepage";
import SignUp from "@/pages/SignUp/SignUp";
import UserLogin from "@/pages/Users/UserLoginIndex";
import Vault from "@/pages/Vault/Vault";
import NotFound from "@/pages/NotFound/NotFound";
import SuccessfulSignUp from "@/pages/SuccessfulSignUp/SuccessfulSignUp";
import BiscuitAlbumInformation from "@/common/components/ReleaseContent/Biscuit/BiscuitAlbumInformation/BiscuitAlbumInformation";
import Collection from "@/pages/Collection/Collection";
import Release from "@/common/components/ReleaseContent/Release/Release";
import UserEmail from "@/pages/PasswordRecovery/UserEmail/UserEmail";
import PasswordReset from "@/pages/PasswordRecovery/PasswordReset/PasswordReset";
import NFTTerms from "../pages/TermsOfService/Terms/NFTTerms";
import PurchaseOfMusic from "../pages/TermsOfService/Terms/PurchaseOfMusic";
import Subscriber from "../pages/TermsOfService/Terms/Subscriber";
import PrivacyPolicy from "../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService/TermsOfService";
import SuccessBuy from "../pages/SuccessfulPurchase/SuccessBuy";

const RoutesConfiguration = () => {
  const isUserAuthenticated = useSelector((state) => state.bng_user.authentication.isAuthenticated);

  const element = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/users",
      element: <UserLogin />,
    },
    {
      path: "/signin",
      element: <UserLogin />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/artists",
      element: <Artists />,
    },
    {
      path: "/vault",
      element: <Vault />,
    },
    {
      path: "/biscuit/:biscuitId/:artistName/:releaseName/",
      element: <BiscuitAlbumInformation />,
    },

    {
      path: "/collection",
      element: isUserAuthenticated ? <Collection /> : <Navigate to="/" />,
    },

    {
      path: "/release/:releaseId/:artistName/:releaseName/",
      element: <Release />,
    },
    {
      path: "/password-recovery",
      element: <UserEmail />,
    },
    {
      path: "/password-recovery/reset/:userResetToken",
      element: <PasswordReset />,
    },
    {
      path: "/purchase-success",
      element: isUserAuthenticated ? <SuccessBuy /> : <Navigate to="/" />,
    },
    {
      path: "/privacy-terms-of-use",
      element: <TermsOfService />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/subscriber-terms-of-service",
      element: <Subscriber />,
    },
    {
      path: "/music-purchase-terms",
      element: <PurchaseOfMusic />,
    },
    {
      path: "/nft-terms",
      element: <NFTTerms />,
    },

    {
      path: "/purchase",
      element: <SuccessfulSignUp />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default RoutesConfiguration;
