import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addcategory(state, action) {
      return { ...state, action };
    },
  },
});

export default categorySlice.reducer;
export const { addcategory } = categorySlice.actions;
