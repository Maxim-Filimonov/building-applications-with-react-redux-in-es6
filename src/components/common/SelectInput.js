import PropTypes from "prop-types";
import React from "react";

const renderOption = option => (
  <option value={option.value} selected={option.selected}>
    {option.text}
  </option>
);
const SelectInput = ({ options, name, defaultOption, onChange, label }) => {
  const optionToSelect = options.find(x => x.text == defaultOption);
  if (optionToSelect) {
    optionToSelect.selected = true;
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" onChange={onChange} name={name}>
        {options.map(renderOption)}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func
};
SelectInput.defaultProps = {
  options: [],
  name: ""
};

export default SelectInput;
