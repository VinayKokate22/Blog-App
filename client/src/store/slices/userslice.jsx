import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      return action.payload;
    },
    delelteUser(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export default userSlice.reducer;
export const { addUser, delelteUser } = userSlice.actions;
