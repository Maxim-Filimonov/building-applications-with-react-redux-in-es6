import * as courseActions from "../../actions/courseActions";

import React, { Component } from "react";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(e) {
    const { course } = this.state;
    course.title = e.target.value;
    this.setState({ course: course });
  }
  onClickSave() {
    const { actions } = this.props;
    const { course: { title } } = this.state;
    actions.createCourse({ title });
  }
  renderCourse(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  render() {
    const course = this.state;
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        {courses.map(this.renderCourse)}
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={course.title} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
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
