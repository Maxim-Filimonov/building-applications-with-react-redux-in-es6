import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions.js';

export class CourseManagePage extends Component {
  constructor( props, context){
    super(props, context);
  }
  render() {
    return (
      <h1>course manage page</h1>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

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
