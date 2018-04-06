import { CREATE_COURSE } from "../actions/types";
import { fromJS } from "immutable";

const onCreateCourse = (state, action) => {
  return fromJS(state)
    .push(action.course)
    .toJS();
};
const handlerMap = {};
handlerMap[CREATE_COURSE] = onCreateCourse;

const courseReducer = (state = [], action = {}) => {
  const handler = handlerMap[action.type];
  if (handler) {
    return handler(state, action);
  } else {
    return state;
  }
};
export default courseReducer;
