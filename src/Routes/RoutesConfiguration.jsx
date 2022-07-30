import { lazy } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "../pages/About/About";
import Artists from "../pages/Artists/Artists";
import FAQ from "../pages/FAQ/FAQ";
import Homepage from "../pages/Home/Homepage";
import SignUp from "../pages/SignUp/SignUp";
import UserLogin from "../pages/Users/UserLoginIndex";
import Vault from "../pages/Vault/Vault";

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
      element: lazy(() => import("../common/components/ReleaseContent/Biscuit/Biscuit")),
    },

    {
      path: "/collection",
      element: isUserAuthenticated ? (
        lazy(() => import("../pages/Collection/Collection"))
      ) : (
        <Navigate to="/" />
      ),
    },

    {
      path: "/release/:releaseId/:artistName/:releaseName/",
      element: lazy(() => import("../common/components/ReleaseContent/Release/Release")),
    },
    {
      path: "/password-recovery",
      element: lazy(() => import("../pages/PasswordRecovery/UserEmail/UserEmail")),
    },
    {
      path: "/password-recovery/reset/:userResetToken",
      element: lazy(() => import("../pages/PasswordRecovery/PasswordReset/PasswordReset")),
    },
    {
      path: "/purchase-success",
      element: isUserAuthenticated ? (
        lazy(() => import("../pages/SuccessfulPurchase/SuccessBuy"))
      ) : (
        <Navigate to="/" />
      ),
    },
    {
      path: "/privacy-terms-of-use",
      element: lazy(() => import("../pages/TermsOfService/TermsOfService")),
    },
    {
      path: "/privacy-policy",
      element: lazy(() => import("../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")),
    },
    {
      path: "/subscriber-terms-of-service",
      element: lazy(() => import("../pages/TermsOfService/Terms/Subscriber")),
    },
    {
      path: "/music-purchase-terms",
      element: lazy(() => import("../pages/TermsOfService/Terms/PurchaseOfMusic")),
    },
    {
      path: "/nft-terms",
      element: lazy(() => import("../pages/TermsOfService/Terms/NFTTerms")),
    },

    {
      path: "/purchase",
      element: lazy(() => import("../pages/SuccessfulPurchase/SuccessBuy")),
    },

    {
      path: "*",
      element: lazy(() => import("../pages/NotFound/NotFound")),
    },
  ]);

  return element;
};

export default RoutesConfiguration;
