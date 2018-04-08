import * as courseActions from "../../actions/courseActions";

import React, { Component } from "react";

import CourseList from "./CourseList";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class CoursesPage extends Component {
  renderCourse(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

CoursesPage.propTypes = {
  actions: PropTypes.shape({
    createCourse: PropTypes.func.isRequired
  }),
  courses: PropTypes.array.isRequired
};
CoursesPage.defaultProps = {
  courses: []
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
