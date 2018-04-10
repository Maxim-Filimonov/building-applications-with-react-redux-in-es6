import React from "react";
import { CourseManagePage } from "./CourseManagePage";
import { shallow } from "enzyme";

const render = props => {
  const defaultProps = {
    actions: { loadSingleCourse: jest.fn() },
    match: { params: { id: -1 } }
  };
  const componentProps = Object.assign(defaultProps, props);
  return shallow(<CourseManagePage {...componentProps} />);
};
it("renders", () => {
  render();
});
