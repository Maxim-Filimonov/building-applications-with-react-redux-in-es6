import {
  CREATE_COURSE,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  CREATE_COURSE_SUCCESS
} from "../actions/types";

import { fromJS } from "immutable";

const onCreateCourse = (state, action) => {
  return fromJS(state)
    .push(action.course)
    .toJS();
};
const onLoadCoursesSuccess = (state, action) => {
  return fromJS(state)
    .concat(action.courses)
    .toJS();
};
const onUpdateCourseSuccess = (state, action) => {
  return fromJS(state)
    .filter(x => x.id === action.course.id)
    .concat(action.course)
    .toJS();
};
const onCreateCourseSuccess = (state, action) =>
  fromJS(state)
    .concat(action.course)
    .toJS();

const handlerMap = {};
handlerMap[CREATE_COURSE] = onCreateCourse;
handlerMap[LOAD_COURSES_SUCCESS] = onLoadCoursesSuccess;
handlerMap[UPDATE_COURSE_SUCCESS] = onUpdateCourseSuccess;
handlerMap[CREATE_COURSE_SUCCESS] = onCreateCourseSuccess;

const courseReducer = (state = [], action = {}) => {
  const handler = handlerMap[action.type];
  if (handler) {
    return handler(state, action);
  } else {
    return state;
  }
};
export default courseReducer;
