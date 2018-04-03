import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { mount, shallow } from "enzyme";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import { MemoryRouter } from "react-router";
import Routes from "./routes";

console.log(Routes);
describe("#routes", () => {
  it("renders home page on initial route", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(component.find(HomePage)).toHaveLength(1);
  });
  it("is goig to be fun", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(component.find(AboutPage)).toHaveLength(1);
  });
});
