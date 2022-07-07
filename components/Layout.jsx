import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme, handleMode } from "./Theme";
import { setGlobalState, useGlobalState } from "../state/index";
import Header from "./Header";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Layout({ children }) {
  const [currentMode] = useGlobalState("mode");
  const [isLoading] = useGlobalState("loading");

  useEffect(() => {
    handleMode(currentMode);
  }, [currentMode]);
  return (
    <ThemeProvider theme={currentMode === "light" ? lightTheme : darkTheme}>
      <Box className="background-box">
        <Container maxWidth="lg">
          <Header/>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
