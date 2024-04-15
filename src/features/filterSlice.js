import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "allTasks",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = filterSlice.actions;

export default filterSlice.reducer;
