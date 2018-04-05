import { CoursesPage } from "./CoursesPage";
import React from "react";
import { shallow } from "enzyme";

describe("CoursesPage", () => {
  it("renders", () => {
    shallow(<CoursesPage />);
  });
  it("updates title when title is updated", () => {
    const component = shallow(<CoursesPage />);
    component.find('input[type="text"]').simulate("change", {
      target: { value: "new title" }
    });

    expect(component.state("course").title).toEqual("new title");
  });
  it("triggers create store action when user presses submit", () => {
    const createCourse = jest.fn();
    const component = shallow(
      <CoursesPage actions={{ createCourse: createCourse }} />
    );
    component.find('input[type="text"]').simulate("change", {
      target: { value: "new title" }
    });
    component.find('input[type="submit"]').simulate("click");

    expect(createCourse).toHaveBeenCalledWith({ title: "new title" });
  });
});
