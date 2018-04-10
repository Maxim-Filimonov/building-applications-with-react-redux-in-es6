import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import React from "react";
const CourseList = ({ courses }) => (
  <ul>
    {courses.map((course, index) => <CourseListRow {...course} key={index} />)}
  </ul>
);
CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};
CourseList.defaultProps = {
  courses: []
};

export default CourseList;
