import CourseList from "./CourseList";
import React from "react";
import { shallow } from "enzyme";

describe("<CourseList/>", () => {
  it("renders", () => {
    shallow(<CourseList />);
  });
  it("passes id of course to course list row", () => {
    const courses = [
      {
        id: "someId"
      }
    ];
    const component = shallow(<CourseList courses={courses} />);

    expect(component.find("CourseListRow").prop("id")).toEqual("someId");
  });
});
