//react imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//component imports
import App from "./App";
import ScrollToTop from "./Routes/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
