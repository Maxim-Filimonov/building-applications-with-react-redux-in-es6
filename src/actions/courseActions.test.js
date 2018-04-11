import {
  loadCourse,
  loadCoursesSuccess,
  loadSingleCourseSuccess,
  loadSingleCourse,
  createCourseSuccess,
  updateCourseSuccess,
  saveCourse
} from "./courseActions";

import { courses } from "../api/mockCourseApi";
import { CREATE_COURSE } from "./types";

describe("#loadCourse", () => {
  it("loads courses successfully", () => {
    const dispatch = jest.fn();
    return loadCourse()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(loadCoursesSuccess(courses));
    });
  });
});
describe("loadSingleCourse", () => {
  it("loads course", () => {
    const dispatch = jest.fn();
    return loadSingleCourse(courses[0].id)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(
        loadSingleCourseSuccess(courses[0])
      );
    });
  });
});
describe("saveCourse", () => {
  it("updates existing course", () => {
    const dispatch = jest.fn();
    const testCourse = { title: "bla", id: "the-course-about-it-all" };
    return saveCourse(testCourse)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(updateCourseSuccess(testCourse));
    });
  });
  it("creates new course", () => {
    const dispatch = jest.fn();
    const testCourse = { title: "all new course without id" };
    return saveCourse(testCourse)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(
        createCourseSuccess(expect.objectContaining(testCourse))
      );
    });
  });
});
