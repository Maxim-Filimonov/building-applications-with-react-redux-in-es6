import React from 'react';
import TextInput from '../common/TextInput';
import SelectTextInput from '../commmon/SelectTextInput';

const CourseForm = ({course, onSave, onChange, loading, errors, allAuthors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        onChange={onChange}
        error={errors.title}/>
    </form>
  )
}
