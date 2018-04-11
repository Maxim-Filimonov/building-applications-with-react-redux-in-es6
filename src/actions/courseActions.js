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
export const createCourseSuccess = course => ({
  type: types.CREATE_COURSE_SUCCESS,
  course
});

export const updateCourseSuccess = course => ({
  type: types.UPDATE_COURSE_SUCCESS,
  course
});

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
export const saveCourse = course => dispatch =>
  courseApi.saveCourse(course).then(savedCourse => {
    if (course.id) {
      dispatch(updateCourseSuccess(savedCourse));
    } else {
      dispatch(createCourseSuccess(savedCourse));
    }
  });

export const loadSingleCourseSuccess = course => ({
  type: types.LOAD_SINGLE_COURSE_SUCCESS,
  course
});
