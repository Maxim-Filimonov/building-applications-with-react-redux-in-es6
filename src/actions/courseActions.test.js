import { loadCourse, loadCoursesSuccess } from "./courseActions";

import { courses } from "../api/mockCourseApi";

describe("#loadCourse", () => {
  it("loads courses successfully", () => {
    const dispatch = jest.fn();
    return loadCourse()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(loadCoursesSuccess(courses));
    });
  });
});
