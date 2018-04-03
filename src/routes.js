import { Route, Switch } from "react-router-dom";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import React from "react";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </App>
);

export default Routes;
