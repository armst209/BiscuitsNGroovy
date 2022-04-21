
//react imports
import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

//component imports
import App from "./App";
import ScrollToTop from "./Routes/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <Router>
    <ScrollToTop />
    <App />
  </Router>
</React.StrictMode>
);
