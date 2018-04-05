import { Route, Switch } from "react-router-dom";

import About from "./components/about/AboutPage";
import App from "./components/App";
import Courses from "./components/course/CoursesPage";
import Home from "./components/home/HomePage";
import React from "react";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
    </Switch>
  </App>
);

export default Routes;
