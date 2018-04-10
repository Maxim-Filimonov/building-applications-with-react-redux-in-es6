import CourseListRow from "./CourseListRow";
import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

const render = props => {
  const defaultProps = {
    title: "sometitle"
  };
  const componentProps = Object.assign(defaultProps, props);
  return mount(
    <MemoryRouter>
      <CourseListRow {...componentProps} />
    </MemoryRouter>
  );
};

describe("<CourseListRow/>", () => {
  it("renders", () => {
    render();
  });
  it("shows nav links", () => {
    const component = render({ id: "clean-code" });
    expect(component.find("Link").prop("to")).toEqual("/course/clean-code");
  });
});
