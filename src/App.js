import * as React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import { Stack } from "@mui/material";
import Description from "./components/Description";
import ImageComponent from "./components/ImageComponent";
import ToDoList from "./components/ToDoList";


export default function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack direction="column" spacing={2} mt={2}>
        <Description />
        <ImageComponent />
        <ToDoList />
      </Stack>
    </Container>
  );
}
