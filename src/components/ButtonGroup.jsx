import React, { useState } from "react";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../features/filterSlice.js";

const ButtonGroup = () => {

  // * The purpose of the buttons is to display task based on complpetion

  const filterValue = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const handleChange = (event, newFilterValue) => {
    dispatch(changeValue(newFilterValue));
  };

  return (
    <Box my={4}>
      <ToggleButtonGroup
        color="primary"
        value={filterValue}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        fullWidth
      >
        <ToggleButton value="allTasks">All Tasks</ToggleButton>
        <ToggleButton value="completedTasks">Completed</ToggleButton>
        <ToggleButton value="remainingTasks">Remaining</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ButtonGroup;
