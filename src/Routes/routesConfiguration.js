import { lazy } from "react";

const routes = [
  {
    path: "/",
    element: lazy(() => import("../pages/Home/Homepage")),
    key: "ROOT",
    private: false,
  },
  {
    path: "/users",
    element: lazy(() => import("../pages/Users/UserLoginIndex")),
    key: "USERS_PAGE",
    private: false,
  },
  {
    path: "/signin",
    element: lazy(() => import("../pages/Users/UserLoginIndex")),
    key: "SIGNIN_PAGE",
    private: false,
    credentials: true,
  },
  {
    path: "/signup",
    element: lazy(() => import("../pages/SignUp/SignUp")),
    key: "SIGNUP_PAGE",
    private: false,
    credentials: true,
  },
  {
    path: "/about",
    element: lazy(() => import("../pages/About/About")),
    key: "ABOUT_PAGE",
    private: false,
  },
  {
    path: "/faq",
    element: lazy(() => import("../pages/FAQ/FAQ")),
    key: "FAQ_PAGE",
    private: false,
  },
  {
    path: "/artists",
    element: lazy(() => import("../pages/Artists/Artists")),
    key: "ARTISTS_PAGE",
    private: false,
  },
  {
    path: "/vault",
    element: lazy(() => import("../pages/Vault/Vault")),
    key: "VAULT_PAGE",
    private: false,
  },
  {
    path: "/biscuit/:biscuitId/:artistName/:releaseName/",
    element: lazy(() => import("../common/components/ReleaseContent/Biscuit/Biscuit")),
    key: "BISCUIT_PAGE",
    private: false,
  },

  {
    path: "/collection",
    element: lazy(() => import("../pages/Collection/Collection")),
    key: "COLLECTION_PAGE",
    private: true,
  },

  {
    path: "/release/:releaseId/:artistName/:releaseName/",
    element: lazy(() => import("../common/components/ReleaseContent/Release/Release")),
    key: "RELEASE_PAGE",
    private: false,
  },
  {
    path: "/password-recovery",
    element: lazy(() => import("../pages/PasswordRecovery/UserEmail/UserEmail")),
    key: "PASSWORD_RECOVERY_PAGE",
    private: false,
  },
  {
    path: "/password-recovery/reset/:userResetToken",
    element: lazy(() => import("../pages/PasswordRecovery/PasswordReset/PasswordReset")),
    key: "NEW_PASSWORD_PAGE",
    private: false,
    resetCredentials: true,
  },
  {
    path: "/purchase-success",
    element: lazy(() => import("../pages/SuccessfulPurchase/SuccessBuy")),
    key: "PURCHASE_SUCCESS_PAGE",
    private: true,
  },
  {
    path: "/privacy-terms-of-use",
    element: lazy(() => import("../pages/TermsOfService/TermsOfService")),
    key: "TERMS_PAGE",
    private: false,
  },
  {
    path: "/privacy-policy",
    element: lazy(() => import("../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")),
    key: "PRIVACY_POLICY_PAGE",
    private: false,
  },
  {
    path: "/subscriber-terms-of-service",
    element: lazy(() => import("../pages/TermsOfService/Terms/Subscriber")),
    key: "SUBCRIBER_TERMS_OF_SERVICE_PAGE",
    private: false,
  },
  {
    path: "/music-purchase-terms",
    element: lazy(() => import("../pages/TermsOfService/Terms/PurchaseOfMusic")),
    key: "MUSIC_PURCHASE_TERMS_PAGE",
    private: false,
  },
  {
    path: "/nft-terms",
    element: lazy(() => import("../pages/TermsOfService/Terms/NFTTerms")),
    key: "NFT_TERMS_PAGE",
    private: false,
  },

  {
    path: "/purchase",
    element: lazy(() => import("../pages/SuccessfulPurchase/SuccessBuy")),
    key: "BUY_TERMS_PAGE",
    private: false,
  },

  //Not Found Page - must be at the bottom - React router V6 - route order doesn't matter
  {
    path: "*",
    element: lazy(() => import("../pages/NotFound/NotFound")),
    key: "NOT_FOUND_PAGE",
    private: false,
  },
];

export default routes;
