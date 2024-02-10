import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      title: "Course",
      category: "Instructor",
    },
  ],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addcourse: (state, action) => {
      const course = {
        id: action.payload,
        title: action.payload,
        category: action.payload,
      };
      state.courses.push(course);
    },
  },
});

export const { addcourse } = courseSlice.actions;

export default courseSlice.reducer;
