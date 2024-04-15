import React from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import ButtonGroup from "./components/ButtonGroup.jsx";
import Tasks from "./components/Tasks.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Input />
        <ButtonGroup />
        <Tasks />
        <Footer />
      </Container>
    </>
  );
}

export default App;
