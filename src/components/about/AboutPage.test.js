import AboutPage from "./AboutPage";
import React from "react";
import { mount } from "enzyme";
describe("AboutPage", () => {
  it("renders", () => {
    mount(<AboutPage />);
  });
});
