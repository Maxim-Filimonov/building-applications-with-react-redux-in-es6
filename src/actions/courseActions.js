import * as types from "./types";

import R from "ramda";
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
export function loadSingleCourse(id) {
  return dispatch =>
    courseApi
      .findCourse(id)
      .then(course => dispatch(loadSingleCourseSuccess(course)))
      .catch(err => {
        throw err;
      });
}

export const loadSingleCourseSuccess = course => ({
  type: types.LOAD_SINGLE_COURSE_SUCCESS,
  course
});
