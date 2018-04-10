import { combineReducers } from "redux";
import courses from "./courseReducer";
import selectedCourse from "./selectedCourseReducer";

const rootReducer = combineReducers({
  courses,
  selectedCourse
});

export default rootReducer;
