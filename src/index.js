import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
// import { BrowserRouter as Router } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop/ScrollToTop";

import App from "./App";

const history = createBrowserHistory(); // or createHashHistory()
wrapHistory(history);

ReactDOM.render(
  // <BrowserRouter> </BrowserRouter>
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
