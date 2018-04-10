import {
  loadCourse,
  loadCoursesSuccess,
  loadSingleCourseSuccess,
  loadSingleCourse
} from "./courseActions";

import { courses } from "../api/mockCourseApi";

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
