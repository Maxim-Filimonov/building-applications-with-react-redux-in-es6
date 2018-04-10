import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseListRow = ({ title, id }) => (
  <Link to={`/course/${id}`}>
    <li>{title}</li>
  </Link>
);

CourseListRow.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default CourseListRow;
