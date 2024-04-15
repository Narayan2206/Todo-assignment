import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice.js";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input !== "") {
      dispatch(addTask(input));
      setInput("");
    }else{
      alert("Input cannot be empty");
    }
  };

  return (
    <Box display="flex" gap={2}>
      <TextField
        value={input}
        fullWidth
        label="Add your task"
        id="fullWidth"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default Input;
