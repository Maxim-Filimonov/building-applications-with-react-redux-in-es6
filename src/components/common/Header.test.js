import Header from "./Header";
import { MemoryRouter } from "react-router";
import React from "react";
import { mount } from "enzyme";

const renderHeader = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Header />
    </MemoryRouter>
  );
const expectActiveLink = component =>
  expect(
    component
      .find(".active")
      .first()
      .text()
  );
describe("Header", () => {
  it("is active home in the beginning", () => {
    const component = renderHeader("/");

    expectActiveLink(component).toEqual("Home");
  });
  it("is active about when we switch to about route", () => {
    const component = renderHeader("/about");

    expectActiveLink(component).toEqual("About");
  });

  it("is active about when we switch to about route", () => {
    const component = renderHeader("/courses");

    expectActiveLink(component).toEqual("Courses");
  });
});
