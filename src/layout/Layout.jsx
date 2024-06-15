import { useState } from "react";
import { SidebarNav, PrimarySearchAppBar } from "./components";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

const StyledBox = styled("div")(({ theme }) => ({
  borderRadius: 3,
  border: "none",
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 0px 40px rgba(0, 0, 0, 0.05)"
      : "0px 1px 3px rgba(0, 0, 0, 0.5)",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));

export const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const toggleSidebar = () => setShow(!show);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#f5f5f5",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#ffffff",
        paper: "#fff",
      },
      text: {
        primary: "#5A6A85",
      },
    },
    typography: {
      fontFamily: "Plus Jakarta Sans",
      fontWeightRegular: 400,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#1d1d1d",
        paper: "paper",
      },
    },
    typography: {
      fontFamily: "Plus Jakarta Sans",
      fontWeightRegular: 400,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
  });

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <SidebarNav open={!show} toggleSidebar={toggleSidebar}>
          <div className="main-content">
            <PrimarySearchAppBar
              toggleSidebar={toggleSidebar}
              themeMode={themeMode}
              setThemeMode={setThemeMode}
            />
            {children}
          </div>
        </SidebarNav>
      </div>
    </ThemeProvider>
  );
};

export { StyledBox };
