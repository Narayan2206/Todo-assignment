import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        content: action.payload,
        isComplete: false,
      }
      state.value.push(task);
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleTask: (state, action) => {
      state.value = state.value.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
