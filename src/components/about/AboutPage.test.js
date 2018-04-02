import AboutPage from "./AboutPage";
import React from "react";
import { shallow } from "enzyme";
describe("AboutPage", () => {
  it("renders", () => {
    shallow(<AboutPage />);
  });
});
