import * as types from "./types";
export const createCourse = course => {
  return {
    course,
    type: types.CREATE_COURSE
  };
};
