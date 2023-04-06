import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postslice from "./slices/postslice";
import userslice from "./slices/userslice";

const rootReducer = combineReducers({
  user: userslice,
  post: postslice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
