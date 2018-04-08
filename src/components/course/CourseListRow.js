import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = ({ title }) => <li>{title}</li>;

CourseListRow.propTypes = {
  title: PropTypes.string.isRequired
};
export default CourseListRow;
