import React from "react";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

const CourseForm = ({
  course,
  onSave,
  onChange,
  loading,
  errors,
  allAuthors
}) => {
  if (!loading) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSave(e);
        }}
      >
        <h1>Manage Course</h1>
        <TextInput
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={errors.title}
        />
        <TextInput
          name="watchHref"
          label="Link"
          value={course.watchHref}
          onChange={onChange}
          error={errors.watchHref}
        />
        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          onChange={onChange}
          error={errors.authorId}
        />
        <SelectInput
          name="category"
          label="Category"
          value={course.category}
          defaultOption="Select Category"
          onChange={onChange}
          error={errors.category}
        />
        <input type="submit" value="Save" className="form-control" />
      </form>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  allAuthors: PropTypes.array
};
CourseForm.defaultProps = {
  allAuthors: [],
  errors: {}
};
export default CourseForm;
