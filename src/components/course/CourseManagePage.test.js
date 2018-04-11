import React from "react";
import { CourseManagePage } from "./CourseManagePage";
import { shallow } from "enzyme";
import R from "ramda";

const render = props => {
  const defaultProps = {
    actions: { loadSingleCourse: jest.fn() },
    match: { params: { id: -1 } }
  };
  const componentProps = R.mergeDeepRight(defaultProps, props || {});
  return shallow(<CourseManagePage {...componentProps} />);
};
it("renders", () => {
  render();
});
it("handles change based on target name", () => {
  const component = render();

  component.instance().onChange({
    target: {
      name: "title",
      value: "The Best Book"
    }
  });

  expect(component.state("title")).toEqual("The Best Book");
});

it("writes on save", () => {
  const saveCourse = jest.fn();
  const testCourse = { title: "magic" };
  const component = render({ actions: { saveCourse } });
  component.setState(testCourse);

  component.instance().onSave();

  expect(saveCourse).toHaveBeenCalledWith({ title: "magic" });
});
it("does not loose initial date on save", () => {
  const saveCourse = jest.fn();
  const testCourse = { title: "magic" };
  const component = render({
    actions: { saveCourse },
    selectedCourse: { id: "123" }
  });
  component.setState(testCourse);

  component.instance().onSave();

  expect(saveCourse).toHaveBeenCalledWith({ title: "magic", id: "123" });
});
it("passes course with updates to course form", () => {
  const testCourse = { title: "123" };

  const component = render({ selectedCourse: testCourse });
  component
    .instance()
    .onChange({ target: { name: "link", value: "http://www.google.com" } });
  component.update();

  const courseProps = Object.keys(component.find("CourseForm").prop("course"));
  expect(courseProps).toContain("link");
  expect(courseProps).toContain("title");
});
