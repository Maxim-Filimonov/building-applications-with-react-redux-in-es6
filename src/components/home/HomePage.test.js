import HomePage from "./HomePage";
import React from "react";
import { shallow } from "enzyme";

describe("HomePage", () => {
  it("renders", () => {
    shallow(<HomePage />);
  });
});
