import CoursesPage from "./CoursesPage";
import React from "react";
import { shallow } from "enzyme";

describe("CoursesPage", () => {
  it("renders", () => {
    shallow(<CoursesPage />);
  });
});
