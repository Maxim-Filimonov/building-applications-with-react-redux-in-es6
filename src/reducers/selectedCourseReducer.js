import { LOAD_SINGLE_COURSE_SUCCESS } from "../actions/types";
import { fromJS, toJS } from "immutable";
const onLoadSingleCourseSucces = (state, action) => {
  return action.course;
};
const handlerMap = {};
handlerMap[LOAD_SINGLE_COURSE_SUCCESS] = onLoadSingleCourseSucces;

const singleCourseReducer = (state = {}, action = {}) => {
  const handler = handlerMap[action.type];
  if (handler) {
    return handler(state, action);
  } else {
    return state;
  }
};
export default singleCourseReducer;
