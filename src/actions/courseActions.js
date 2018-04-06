import * as types from "./types";

import courseApi from "../api/mockCourseApi";

export const createCourse = course => {
  return {
    course,
    type: types.CREATE_COURSE
  };
};

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}
export function loadCourse() {
  return dispatch =>
    courseApi
      .getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(err => {
        throw err;
      });
}
