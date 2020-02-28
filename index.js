import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import "./index.module.css";
import registerServiceWorker from "./src/registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
