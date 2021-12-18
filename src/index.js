import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import { wrapHistory } from "oaf-react-router";

import App from "./App";
import ScrollToTop from "./Routes/ScrollToTop";

//DEV/LOCAL ENV
// env.REACT_APP_ACCESS_NODE="https://access-testnet.onflow.org"
// env.REACT_APP_WALLET_DISCOVERY="https://fcl-discovery.onflow.org/testnet/authn"
// env.REACT_APP_CONTRACT_PROFILE="0xf7ebe30e2e33b1f2"
// env.FRONTEND_URL="http://localhost:3000"
// env.BACKEND_URL="http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080/api"

//PROD ENV
// env.REACT_APP_ACCESS_NODE="https://access-testnet.onflow.org"
// env.REACT_APP_WALLET_DISCOVERY="https://fcl-discovery.onflow.org/testnet/authn"
// env.REACT_APP_CONTRACT_PROFILE="0xf7ebe30e2e33b1f2"
// env.FRONTEND_URL="load-balancer-bng-prod-477120553.us-east-1.elb.amazonaws.com"
// env.BACKEND_URL="load-balancer-bng-prod-477120553.us-east-1.elb.amazonaws.com/api"

// const history = createBrowserHistory(); // or createHashHistory()
// wrapHistory(history);

//token is an issue for login and signup components for password reset
//react-dotenv doesn't work for routes, causes issues -- will use process.env combined with REACT_APP_ (must have for env variables)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
