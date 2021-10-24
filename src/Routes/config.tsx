
import { ComponentType, lazy, LazyExoticComponent, ReactNode } from 'react';
import Loading from '../components/Loading/Loading';

export interface IRoute {
    // Path, like in basic prop
    path: string;
    //Key, unique identifier for map
    key: string;
    // Exact, like in basic prop
    exact: boolean;
    // Preloader for lazy loading
    fallback: NonNullable<ReactNode> | null;
    // Lazy Loaded component
    component?: LazyExoticComponent<ComponentType<any>>;
    // Sub routes
    routes?: IRoute[];
    // Redirect path
    redirect?: string;
    // If router is private, this is going to be true
    private?: boolean;
    loginPopup?: boolean;
  }
const routes:IRoute[] = [
    {
      path: "/",
      key: "ROOT",
      exact: true,
      redirect: "/home",
      fallback:<Loading/>
    },
    {
      path: "/home",
      component: lazy(()=>import("../pages/Homepage/Homepage")),
      key: "HOME_PAGE",
      exact: true,
      private:false,
      fallback:<Loading/>,
    },
    {
        path: "/about",
        component: lazy(()=>import("../pages/About/About")),
        key: "ABOUT_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
        
      },
      {
        path: "/faq",
        component: lazy(()=>import("../pages/FAQ/FAQ")),
        key: "FAQ_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
        
      },
      {
        path: "/artists",
        component: lazy(()=>import("../pages/Artists/Artists")),
        key: "ARTISTS_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
      },
      {
        path: "/events",
        component: lazy(()=>import("../pages/Events/Events")),
        key: "EVENTS_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
       
      },
      {
        path: "/collection",
        component: lazy(()=>import("../pages/Collection/Collection")),
        key: "COLLECTION_PAGE",
        exact: true,
        private:true,
        fallback:<Loading/>
        
      },
      {
        path: "/purchase-success",
        component: lazy(()=>import("../components/SuccessfulPurchase/SuccessBuy")),
        key: "PURCHASE_SUCCESS_PAGE",
        exact: true,
        private: true,
        fallback:<Loading/>
       
      },
      {
        path: "/privacy-terms-of-use",
        component:lazy(()=> import("../pages/TermsOfService/TermsOfService")),
        key: "TERMS_PAGE",
        exact:true,
        private:false,
        fallback:<Loading/>
      },
      {
        path: "/privacy-policy",
        component:lazy(()=>import("../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")),
        key: "PRIVACY_POLICY_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
      
      },
      {
        path: "/subscriber-terms-of-service",
        component: lazy(()=>import("../pages/TermsOfService/Terms/Subscriber")),
        key: "SUBCRIBER_TERMS_OF_SERVICE_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
      
      },
      {
        path: "/music-purchase-terms",
        component: lazy(()=>import("../pages/TermsOfService/Terms/PurchaseOfMusic")),
        key: "MUSIC_PURCHASE_TERMS_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
       
      },
      {
        path: "/nft-terms",
        component: lazy(()=>import("../pages/TermsOfService/Terms/NFTTerms")),
        key: "NFT_TERMS_PAGE",
        exact: true,
        private:false,
        fallback:<Loading/>
       
      },
      //Not Found Page - must be at the bottom
      {
        path:"*",
        component: lazy(()=>import("../pages/NotFound/NotFound")),
        key: "NOT_FOUND_PAGE",
        exact: false,
        private:false,
        fallback:<Loading/>
      }
     
  ];

  export default routes;