import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{
      backgroundColor: yellow,
      minHeight: 200,
    }}>
    <App />
    </Box>
  </ThemeProvider>
);
