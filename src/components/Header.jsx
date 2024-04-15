import React from "react";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box component="header">
      <Typography variant="h3" mt={2} align="center" gutterBottom>
        To-Do List
      </Typography>
    </Box>
  );
};

export default Header;
