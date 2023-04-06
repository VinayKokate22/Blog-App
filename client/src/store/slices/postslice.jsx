import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addPost(state, action) {
      return { ...state, action };
    },
  },
});

export default postSlice.reducer;
export const { addPost } = postSlice.actions;
