import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Daily
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
