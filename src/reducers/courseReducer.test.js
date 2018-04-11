import {
  createCourse,
  loadCoursesSuccess,
  updateCourseSuccess,
  createCourseSuccess
} from "../actions/courseActions";

import courseReducer from "./courseReducer";

it("has no courses by default", () => {
  expect(courseReducer()).toEqual([]);
});
it("adds a new course", () => {
  const newState = courseReducer([], createCourse({ title: "somecourse" }));

  expect(newState.length).toEqual(1);
  expect(newState[0].title).toEqual("somecourse");
});
it("adds courses after load", () => {
  const newState = courseReducer([], loadCoursesSuccess([1, 2, 3]));

  expect(newState.length).toEqual(3);
});
it("does not reload over existing courses", () => {
  const newState = courseReducer([1, 2], loadCoursesSuccess([1, 2, 3]));

  expect(newState.length).toEqual(5);
});
it("updates existing course", () => {
  const existingCourses = [
    {
      id: "123"
    },
    { id: "anotherId" }
  ];
  const newState = courseReducer(
    existingCourses,
    updateCourseSuccess({ id: "123", title: "now with title" })
  );

  expect(newState[0].title).toEqual("now with title");
});
it("adds new course on create", () => {
  const newState = courseReducer([1, 2], createCourseSuccess(3));

  expect(newState).toEqual([1, 2, 3]);
});
