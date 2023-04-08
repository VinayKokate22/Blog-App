import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postslice from "./slices/postslice";
import userslice from "./slices/userslice";
import uniquepost from "./slices/uniquepost";
import categoryslice from "./slices/categoryslice";

const rootReducer = combineReducers({
  user: userslice,
  post: postslice,
  uniquepost: uniquepost,
  category: categoryslice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
