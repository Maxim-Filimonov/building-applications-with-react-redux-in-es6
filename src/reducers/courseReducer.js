import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/types";

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
const handlerMap = {};
handlerMap[CREATE_COURSE] = onCreateCourse;
handlerMap[LOAD_COURSES_SUCCESS] = onLoadCoursesSuccess;

const courseReducer = (state = [], action = {}) => {
  const handler = handlerMap[action.type];
  if (handler) {
    return handler(state, action);
  } else {
    return state;
  }
};
export default courseReducer;
