import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasksSlice.js";
import filterReducer from "../features/filterSlice.js"

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});

export default store;
