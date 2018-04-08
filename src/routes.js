import { Route, Switch } from "react-router-dom";

import About from "./components/about/AboutPage";
import App from "./components/App";
import Courses from "./components/course/CoursesPage";
import Home from "./components/home/HomePage";
import CourseManage from './components/course/CourseManagePage';
import React from "react";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/course/:id" component={CourseManage} />
    </Switch>
  </App>
);

export default Routes;
