import { createSlice } from "@reduxjs/toolkit";

const uniquePostSlice = createSlice({
  name: "uniquePost",
  initialState: [],
  reducers: {
    adduniquePost(state, action) {
      return { ...state, action };
    },
  },
});

export default uniquePostSlice.reducer;
export const { adduniquePost } = uniquePostSlice.actions;
