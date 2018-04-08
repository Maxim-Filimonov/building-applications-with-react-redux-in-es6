import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { mount, shallow } from "enzyme";

import About from "./components/about/AboutPage";
import App from "./components/App";
import Courses from "./components/course/CoursesPage";
import Home from "./components/home/HomePage";
import CourseManage from './components/course/CourseManagePage';
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import Routes from "./routes";
import configureStore from "./store/configureStore";

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Provider store={configureStore()}>
        <Routes />
      </Provider>
    </MemoryRouter>
  );
describe("#routes", () => {
  it("renders home page on initial route", () => {
    const component = renderRoutes("/");

    expect(component.find(Home)).toHaveLength(1);
  });
  it("renders about page for about", () => {
    const component = renderRoutes("/about");

    expect(component.find(About)).toHaveLength(1);
  });
  it("renders courses page for /courses", () => {
    const component = renderRoutes("/courses");

    expect(component.find(Courses)).toHaveLength(1);
  });
  it("renders courses manage page for /course", () => {
    const component = renderRoutes("/course/javascript");

    expect(component.find(CourseManage)).toHaveLength(1);
  });
});
