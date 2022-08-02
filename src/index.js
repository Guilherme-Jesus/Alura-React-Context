import "./index.css";

import {
  createTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import Login from "pages/Login";
import React from "react";
import ReactDOM from "react-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#2A9F85" },
    secondary: { main: "#FF7070" },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
