import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions.js";
import CourseForm from "./CourseForm";
import PropTypes from "prop-types";

export class CourseManagePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  componentDidMount() {
    const {
      actions: { loadSingleCourse },
      match: { params: { id } }
    } = this.props;
    loadSingleCourse(id);
  }
  onChange(e) {}
  onSave(e) {}
  render() {
    if (
      this.props.selectedCourse &&
      this.props.selectedCourse.id !== undefined
    ) {
      return (
        <CourseForm
          course={this.props.selectedCourse}
          onChange={this.onChange}
          onSave={this.onSave}
        />
      );
    } else {
      return <h1>LOADING...</h1>;
    }
  }
}

const mapStateToProps = ({ selectedCourse }) => ({ selectedCourse });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch)
});

CourseManagePage.propTypes = {
  actions: PropTypes.shape({
    loadSingleCourse: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  selectedCourse: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);

//class CourseManage extends Component {
//constructor(props, context) {
//super(props, context);
//this.state = {
//course: {}
//};
//this.onTitleChange = this.onTitleChange.bind(this);
//this.onClickSave = this.onClickSave.bind(this);
//}
//onTitleChange(e) {
//const { course } = this.state;
//course.title = e.target.value;
//this.setState({ course: course });
//}
//onClickSave() {
//const { actions } = this.props;
//const { course: { title } } = this.state;
//actions.createCourse({ title });
//}
//render() {
//const course = this.state;
//return (
//<div>
//<h2>Add Course</h2>
//<input type="text" onChange={this.onTitleChange} value={course.title} />
//<input type="submit" value="Save" onClick={this.onClickSave} />
//</div>
//);
//}
//}
