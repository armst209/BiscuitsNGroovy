//react imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//component imports
import App from "./App";
import ScrollToTop from "./Routes/ScrollToTop";

//redux imports
import store from "./redux/store/index";
import { Provider } from "react-redux"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
