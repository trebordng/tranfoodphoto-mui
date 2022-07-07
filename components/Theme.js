import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    colorTheme: {
      main: "linear-gradient(45deg, rgba(161,234,251,1) 0%, rgba(202,187,233,1) 100%)",
      glass:
        " linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)",
      heading: "#232127",
      navText: "#827895",
      hover:"#b290aa"
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    colorTheme: {
      main: "linear-gradient(171deg, rgba(124,131,253,1) 0%, rgba(125,237,255,1) 100%)",
      glass:
        " linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 60%)",
      heading:"#d8f9ff",
        navText: "#01032b",
        hover:"#7DEDFF"
    },
  },
});
export function handleMode(currentMode) {
  var root = document.querySelector(":root");
  if (currentMode === "light") {
    root.style.setProperty(
      "--background-color",
      lightTheme.palette.colorTheme.main
    );
    root.style.setProperty(
      "--glass-color",
      lightTheme.palette.colorTheme.glass
    );
    root.style.setProperty(
      "--hover-color",
      lightTheme.palette.colorTheme.hover
    );
    root.style.setProperty("--navText-color", lightTheme.palette.colorTheme.navText);
    root.style.setProperty("--heading-color", lightTheme.palette.colorTheme.heading);

  } else {
    root.style.setProperty(
      "--background-color",
      darkTheme.palette.colorTheme.main
    );
    root.style.setProperty("--glass-color", darkTheme.palette.colorTheme.glass);
    root.style.setProperty(
        "--hover-color",
        darkTheme.palette.colorTheme.hover
      );
      root.style.setProperty("--navText-color", darkTheme.palette.colorTheme.navText);
      root.style.setProperty("--heading-color", darkTheme.palette.colorTheme.heading);
  }
}