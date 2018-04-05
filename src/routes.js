import { Route, Switch } from "react-router-dom";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import CoursesPage from "./components/course/CoursesPage";
import HomePage from "./components/home/HomePage";
import React from "react";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
    </Switch>
  </App>
);

export default Routes;
