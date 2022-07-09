import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme, handleMode } from "./Theme";
import { setGlobalState, useGlobalState } from "../state/index";
import Header from "./Header";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

function Layout({ children }) {
  const [currentMode] = useGlobalState("mode");

  useEffect(() => {
    handleMode(currentMode);
  }, [currentMode]);
  return (
    <ThemeProvider theme={currentMode === "light" ? lightTheme : darkTheme}>
      <Box className="background-box fade-in">
        <Container maxWidth="lg">
          <Header/>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
