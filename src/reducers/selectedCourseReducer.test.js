import { loadSingleCourseSuccess } from "../actions/courseActions";
import selectedCourseReducer from "./selectedCourseReducer";
it("saves selected course", () => {
  const newState = selectedCourseReducer(
    {},
    loadSingleCourseSuccess({ id: 1 })
  );

  expect(newState.id).toEqual(1);
});
