import "babel-polyfill";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import history from "history";
import { render } from "react-dom";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import styles from "./styles/styles.css";

render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("app")
);
