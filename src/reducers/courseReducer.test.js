import courseReducer from "./courseReducer";
import { createCourse } from "../actions/courseActions";

it("has no courses by default", () => {
  expect(courseReducer()).toEqual([]);
});
it("adds a new course", () => {
  const newState = courseReducer([], createCourse({ title: "somecourse" }));

  expect(newState.length).toEqual(1);
  expect(newState[0].title).toEqual("somecourse");
});
