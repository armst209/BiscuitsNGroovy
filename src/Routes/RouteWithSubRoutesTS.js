// //react imports
// import { Suspense } from "react";
// import { Redirect, Route } from "react-router-dom";


// //utility imports
// // import { PR_Auth_Token } from "../utils/UtilityVariables";

// //redux imports
// import { useSelector, RootStateOrAny } from "react-redux";

// //route imports
// import { IRoute } from "./config";


// const RouteWithSubRoutes = (route: IRoute) => {

//  const isUserAuthenticated = useSelector((state:RootStateOrAny)=> state.authentication.isLoggedIn);
//  console.log(isUserAuthenticated);

//  const handleRouteRendering = (props:any)=>{

//   if(route.private){

//     return <Redirect path="/" />
//   }
   
//  }
 
//   return (
//    <Route path={route.path} exact={route.exact} render={()=> handleRouteRendering}/>
//   );
// };

// export default RouteWithSubRoutes;

// {/* <Route
//           path={route.path}
//           render={(props: any) =>
//             //REDIRECT
//             route.redirect ? (
//               <Redirect to={route.redirect} />
//             ) : //PRIVATE
//               route.private ? (
//                 isUserAuthenticated ? (
//                   route.component && (
//                     <route.component {...props} routes={route.routes} />
//                   )
//                 ) : (
//                   <Redirect to="/" />
//                 )
//               ) : //CREDENTIALS
//                 route.credentials ? (
//                   isUserAuthenticated ? (
//                     <Redirect to="/" />
//                   ) : (
//                     route.component && (
//                       <route.component {...props} routes={route.routes} />
//                     )
//                   )
//                 ) : //RESETCREDENTIALS
//                   route.resetCredentials ? (
//                     PR_Auth_Token ? (
//                       route.component && (
//                         <route.component {...props} routes={route.routes} />
//                       )
//                     ) : (
//                       <Redirect to="/" />
//                     )
//                   ) : (
//                     route.component && (
//                       <route.component {...props} routes={route.routes} />
//                     )
//                   )
//           }
//         /> */}
      
