import React from "react";
import SelectInput from "./SelectInput";
import { shallow } from "enzyme";

function render(props) {
  return shallow(<SelectInput {...props} />);
}
const options = [
  {
    value: "au",
    text: "Australia"
  },
  {
    value: "ind",
    text: "Indonesia"
  }
];
describe("<SelectInput/>", () => {
  it("renders", () => {
    render();
  });
  it("renders select with options", () => {
    const component = render({ options });

    const optionValues = component.find("option").map(x => x.prop("value"));
    expect(optionValues).toContain("au", "ind");
  });
  it("renders selected option", () => {
    const component = render({ options, defaultOption: options[0].text });

    const optionToBeSelected = component.find('option[value="au"]');

    expect(optionToBeSelected.prop("selected")).toBeTruthy();
  });
  it("calls change method on change", () => {
    const onChange = jest.fn();
    const component = render({ onChange: onChange });

    component.find("select").simulate("change");

    expect(onChange).toHaveBeenCalled();
  });
});
