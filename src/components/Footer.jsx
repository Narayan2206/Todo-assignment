import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <Box component="footer" my={4}>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Copyright &copy; {year}. Created by Narayan Pal.
      </Typography>
    </Box>
  );
};

export default Footer;
