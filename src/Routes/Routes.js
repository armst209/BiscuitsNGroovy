// import { React, lazy, useState } from "react";
// import { Route, Switch } from "react-router-dom";

// //Lazy loaded components
// const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
// const About = lazy(() => import("../pages/About/About"));
// const FAQ = lazy(() => import("../pages/FAQ/FAQ"));
// const Artists = lazy(() => import("../pages/Artists/Artists"));
// const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

// const TermsOfService = lazy(() =>
//   import("../pages/TermsOfService/TermsOfService")
// );
// const PrivacyPolicy = lazy(() =>
//   import("../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")
// );
// const PurchaseOfMusic = lazy(() =>
//   import("../pages/TermsOfService/Terms/PurchaseOfMusic")
// );
// const Subscriber = lazy(() =>
//   import("../pages/TermsOfService/Terms/Subscriber")
// );
// const NFTTerms = lazy(() => import("../pages/TermsOfService/Terms/NFTTerms"));

// const CollectionHome = lazy(() =>
//   import("../pages/Collection/Collection")
// );

// // const SuccessfulSignUp = lazy(() =>
// //   import("../pages/SuccessfulSignUp/SuccessfulSignUp")
// // );
// const SuccessfulPurchase = lazy(() =>
//   import("../components/SuccessfulPurchase/SuccessBuy")
// );
// // const PasswordRecovery = lazy(() =>
// //   import("../pages/PasswordRecovery/PasswordRecovery.js")
// // );

// // const SpecialReleases = lazy(() =>
// //   import(
// //     "../components/FanPortal/FPHomePage/Sections/SpecialReleases/SpecialReleases"
// //   )
// // );
// // const SignUpNonPopUp = lazy(() =>
// //   import("../pages/SignUpNonPopUp/SignUpNonPopUp")
// // );

// // let token = localStorage.getItem("token");
// // return (
// //   <Switch>
// //     <Route exact path="/">
// //       <Redirect to="/home" />
// //     </Route>
// //     <Route
// //       exact={true}
// //       path="/home"
// //       render={() => (
// //         <Homepage
// //           loginPopup={props.loginPopup}
// //           showLoginPopup={props.showLoginPopup}
// //           signUpPopup={props.signUpPopup}
// //           showSignUpPopup={props.showSignUpPopup}
// //           showMobileNav={props.showMobileNav}
// //           setShowMobileNav={props.setShowMobileNav}
// //           stripeLoader={props.stripeLoader}
// //           setStripeLoader={props.setStripeLoader}
// //         />
// //       )}
// //     />
// //     <Route
// //       exact={true}
// //       path="/about"
// //       render={(props) => <About {...props} />}
// //     />
// //     <Route exact={true} path="/faq" render={(props) => <FAQ {...props} />} />
// //     <Route
// //       exact={true}
// //       path="/artists"
// //       render={(props) => <Artists {...props} />}
// //     />
// //     {/* Protected Routes */}
// //     <ProtectedRoute
// //       exact={true}
// //       path="/collection"
// //       render={() => <FanPortalHome {...props} />}
// //     />
// //     {/* <ProtectedRoute
// //       exact={true}
// //       path="/purchase-success"
// //       render={(props) => <SuccessfulPurchase {...props} />}
// //     />
// //     <ProtectedRoute
// //       exact={true}
// //       path="/account-creation-success"
// //       render={(props) => <SuccessfulSignUp {...props} />}
// //     /> */}
// //     <ProtectedRoute
// //       exact={true}
// //       path="/portal/checkout"
// //       component={Checkout}
// //     />
// //     {/* Special Releases Route */}
// //     {/* <SpecialReleaseRoute
// //       exact={true}
// //       path="/special-release"
// //       render={() => (
// //         <SpecialReleases
// //           loginPopup={props.loginPopup}
// //           showLoginPopup={props.showLoginPopup}
// //           signUpPopup={props.signUpPopup}
// //           showSignUpPopup={props.showSignUpPopup}
// //         />
// //       )}
// //     />
// //     <Route
// //       exact={true}
// //       path="/release-signup"
// //       render={() => (
// //         <SignUpNonPopUp
// //           loginPopup={props.loginPopup}
// //           showLoginPopup={props.showLoginPopup}
// //           signUpPopup={props.signUpPopup}
// //           showSignUpPopup={props.showSignUpPopup}
// //         />
// //       )}
// //     /> */}
// //     {/* Terms of Use & Privacy Policy Components Render */}
// //     <Route
// //       exact={true}
// //       path="/privacy-terms-of-use"
// //       render={() => <TermsOfService />}
// //     />
// //     {/* <Route
// //       exact={true}
// //       path="/privacy-policy"
// //       render={() => <PrivacyPolicy />}
// //     />
// //     <Route
// //       exact={true}
// //       path="/terms-of-service"
// //       render={() => <Subscriber />}
// //     />
// //     <Route
// //       exact={true}
// //       path="/music-purchase-terms"
// //       render={() => <PurchaseOfMusic />}
// //     /> */}
// //     {/* <Route exact={true} path="/nft-terms" render={() => <NFTTerms />} /> */}
// //     {/* Password Recovery Routes */}
// //     {/* <Route
// //       exact={true}
// //       path="/password-recovery"
// //       render={(props) => (
// //         <PasswordRecovery
// //           {...props}
// //           // loginPopup={props.loginPopup}
// //           // showLoginPopup={props.showLoginPopup}
// //           // signUpPopup={props.signUpPopup}
// //           // showSignUpPopup={props.showSignUpPopup}
// //         />
// //       )}
// //     /> */}
// //     {/* Not Found Component*/}
// //     <Route path="/404" component={NotFound} />
// //     <Redirect from="*" to="/404" />
// // </Switch>
// // );

// /**
//  * Render a route with potential sub routes
//  * this function creates the route element by passing in the route objects as parameters(use spread operator for each iteration)
//  * https://reacttraining.com/react-router/web/example/route-config
//  */
// function RouteWithSubRoutes(route) {
//   const [loginPopup, showLoginPopup] = useState(false);
//   const [signUpPopup, showSignUpPopup] = useState(false);
//   const [showMobileNav, setShowMobileNav] = useState(false);
//   const [stripeLoader, setStripeLoader] = useState("");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//     <Route
//       path={route.path}
//       exact={route.exact}
//       render={(props) => (
//         <route.component
//           {...props}
//           routes={route.routes}
//           loginPopup={loginPopup}
//           showLoginPopup={showLoginPopup}
//           signUpPopup={signUpPopup}
//           showSignUpPopup={showSignUpPopup}
//           showMobileNav={showMobileNav}
//           setShowMobileNav={setShowMobileNav}
//           stripeLoader={stripeLoader}
//           setStripeLoader={setStripeLoader}
//           mobileMenuOpen={mobileMenuOpen}
//           setMobileMenuOpen={setMobileMenuOpen}
//         />
//       )}
//     />
//   );
// }
// /**
//  * Use this component for any new section of routes (any config object that has a "routes" property
//  */
// export function RenderRoutes({ routes }) {
//   return (
//     <Switch>
//       {routes.map((route) => {
//         return <RouteWithSubRoutes key={route.key} {...route} />;
//       })}
//       <Route component={() => <NotFound />} />
//     </Switch>
//   );
// }
// export default ROUTES;
