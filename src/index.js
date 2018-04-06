import "babel-polyfill";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import configureStore from "./store/configureStore";
import history from "history";
import { loadCourse } from "./actions/courseActions";
import { render } from "react-dom";
import styles from "./styles/styles.css";

const store = configureStore();
store.dispatch(loadCourse());

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("app")
);
