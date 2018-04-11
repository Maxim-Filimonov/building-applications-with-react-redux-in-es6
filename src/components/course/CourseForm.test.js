import CourseForm from "./CourseForm";
import React from "react";
import { shallow } from "enzyme";

const render = props => {
  const defaultProps = {
    onSave: jest.fn(),
    course: {},
    onChange: jest.fn(),
    loading: false
  };
  const componentProps = Object.assign(defaultProps, props);
  return shallow(<CourseForm {...componentProps} />);
};

describe("<CourseForm />", () => {
  it("renders", () => {
    render({ course: {} });
  });
  it("calls on save on form submit", () => {
    const onSave = jest.fn();
    const component = render({ onSave: onSave });

    component.find("form").simulate("submit", { preventDefault: jest.fn() });

    expect(onSave).toHaveBeenCalled();
  });
  it("calls on change for input", () => {
    const onChange = jest.fn();
    const component = render({ onChange: onChange });

    component
      .find("TextInput")
      .first()
      .simulate("change");

    expect(onChange).toHaveBeenCalled();
  });
});
