import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // onUpdate={() => window.scrollTo(0, 0)}
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
