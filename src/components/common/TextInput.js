import PropTypes from "prop-types";
import React from "react";

const TextInput = ({ onChange, value, name, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
TextInput.defaultProps = {
  name: ""
};

export default TextInput;
