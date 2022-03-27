import { ComponentType, lazy, LazyExoticComponent, ReactNode } from "react";

export interface IRoute {
  // Path, like in basic prop
  path: string;
  //Key, unique identifier for map
  key: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  // fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If route is private, this is going to be true
  private?: boolean;
  //If the route has login/signup functionality
  credentials?: boolean;
  //If route has password reset functionality
  resetCredentials?: boolean;

}
const routes: IRoute[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/Homepage/Homepage")),
    key: "ROOT",
    exact: true,
    private: false,
 

  },
  {
    path: "/users",
    component: lazy(() => import("../pages/Users/UserLoginIndex")),
    key: "USERS_PAGE",
    exact: true,
    private: false,
   
  },
  {
    path: "/signin",
    component: lazy(() => import("../pages/Login/Login")),
    key: "SIGNIN_PAGE",
    exact: true,
    private: false,
    credentials: true,
    
  },
  {
    path: "/signup",
    component: lazy(() => import("../pages/SignUp/SignUp")),
    key: "SIGNUP_PAGE",
    exact: true,
    private: false,
    credentials: true,
  
  },
  {
    path: "/about",
    component: lazy(() => import("../pages/About/About")),
    key: "ABOUT_PAGE",
    exact: true,
    private: false,
  
  },
  {
    path: "/faq",
    component: lazy(() => import("../pages/FAQ/FAQ")),
    key: "FAQ_PAGE",
    exact: true,
    private: false,
   
  },
  {
    path: "/artists",
    component: lazy(() => import("../pages/Artists/Artists")),
    key: "ARTISTS_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/vault",
    component: lazy(() => import("../pages/Vault/Vault")),
    key: "VAULT_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/biscuit/:biscuitId/:artistName/:releaseName/",
    component: lazy(
      () => import("../components/ReleaseContent/Biscuit/Biscuit")
    ),
    key: "BISCUIT_PAGE",
    exact: true,
    private: false,
  },

  {
    path: "/collection",
    component: lazy(() => import("../pages/Collection/Collection")),
    key: "COLLECTION_PAGE",
    exact: true,
    private: true,
  },

  {
    path: "/release/:releaseId/:artistName/:releaseName/",
    component: lazy(
      () => import("../components/ReleaseContent/Release/Release")
    ),
    key: "RELEASE_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/password-recovery",
    component: lazy(
      () => import("../pages/PasswordRecovery/UserEmail/UserEmail")
    ),
    key: "PASSWORD_RECOVERY_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/password-recovery/reset/:userResetToken",
    component: lazy(
      () => import("../pages/PasswordRecovery/PasswordReset/PasswordReset")
    ),
    key: "NEW_PASSWORD_PAGE",
    exact: true,
    private: false,
    resetCredentials: true,
  },
  {
    path: "/purchase-success",
    component: lazy(() => import("../pages/SuccessfulPurchase/SuccessBuy")),
    key: "PURCHASE_SUCCESS_PAGE",
    exact: true,
    private: true,
  },
  {
    path: "/privacy-terms-of-use",
    component: lazy(() => import("../pages/TermsOfService/TermsOfService")),
    key: "TERMS_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/privacy-policy",
    component: lazy(
      () => import("../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")
    ),
    key: "PRIVACY_POLICY_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/subscriber-terms-of-service",
    component: lazy(() => import("../pages/TermsOfService/Terms/Subscriber")),
    key: "SUBCRIBER_TERMS_OF_SERVICE_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/music-purchase-terms",
    component: lazy(
      () => import("../pages/TermsOfService/Terms/PurchaseOfMusic")
    ),
    key: "MUSIC_PURCHASE_TERMS_PAGE",
    exact: true,
    private: false,
  },
  {
    path: "/nft-terms",
    component: lazy(() => import("../pages/TermsOfService/Terms/NFTTerms")),
    key: "NFT_TERMS_PAGE",
    exact: true,
    private: false,
  },

  {
    path: "/purchase",
    component: lazy(() => import("../pages/SuccessfulPurchase/SuccessBuy")),
    key: "BUY_TERMS_PAGE",
    exact: true,
    private: false,
  },

  //Not Found Page - must be at the bottom
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound/NotFound")),
    key: "NOT_FOUND_PAGE",
    exact: false,
    private: false,
  },
];

export default routes;
