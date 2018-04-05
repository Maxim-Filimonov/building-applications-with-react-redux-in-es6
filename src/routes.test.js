import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { mount, shallow } from "enzyme";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import CoursesPage from "./components/course/CoursesPage";
import HomePage from "./components/home/HomePage";
import { MemoryRouter } from "react-router";
import Routes from "./routes";

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>
  );
describe("#routes", () => {
  it("renders home page on initial route", () => {
    const component = renderRoutes("/");

    expect(component.find(HomePage)).toHaveLength(1);
  });
  it("renders about page for about", () => {
    const component = renderRoutes("/about");

    expect(component.find(AboutPage)).toHaveLength(1);
  });
  it("renders courses page for /courses", () => {
    const component = renderRoutes("/courses");

    expect(component.find(CoursesPage)).toHaveLength(1);
  });
});
