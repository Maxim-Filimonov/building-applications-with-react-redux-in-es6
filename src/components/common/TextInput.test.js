import React from "react";
import TextInput from "./TextInput";
import { shallow } from "enzyme";
describe("<TextInput/>", () => {
  it("renders", () => {
    shallow(<TextInput />);
  });
  it("renders input ", () => {
    const component = shallow(<TextInput />);
    expect(component.find("input").length).toEqual(1);
  });
  it("renders label", () => {
    const component = shallow(<TextInput label="Login" />);
    expect(component.find("label").html()).toContain("Login");
  });
  it("calls onChange on change of input", () => {
    const onChange = jest.fn();

    const component = shallow(<TextInput onChange={onChange} />);

    component.find("input").simulate("change");

    expect(onChange).toHaveBeenCalled();
  });
});
