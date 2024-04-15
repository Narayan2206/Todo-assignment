import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/tasksSlice.js";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.value);
  const filterValue = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  let tasksArr = [];

  if (filterValue === "completedTasks") {
    tasksArr = tasks.filter((task) => task.isComplete);
  } else if (filterValue === "remainingTasks") {
    tasksArr = tasks.filter((task) => !task.isComplete);
  } else {
    tasksArr = tasks;
  }

  return (
    <Box sx={{minHeight:"50vh"}}>
      {tasks.length !== 0 && (
        <Typography variant="h6" gutterBottom>
          Your Tasks:
        </Typography>
      )}
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {tasks.length === 0 ? (
          <Typography variant="h6" align="center" gutterBottom>
            No tasks today...
          </Typography>
        ) : (
          tasksArr.map((task) => {
            const labelId = `checkbox-list-label-${task.id}`;

            return (
              <ListItem
                key={task.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={() => dispatch(toggleTask(task.id))}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={task.isComplete}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${task.content}`} />
                </ListItemButton>
              </ListItem>
            );
          })
        )}
      </List>
    </Box>
  );
};

export default Tasks;
