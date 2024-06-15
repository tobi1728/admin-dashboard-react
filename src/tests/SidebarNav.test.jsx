import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SidebarNav } from "../layout/components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const mockTheme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
  transitions: {
    create: () => "none",
    easing: {
      sharp: "none",
    },
    duration: {
      enteringScreen: 0,
      leavingScreen: 0,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    up: () => "none",
  },
});

const renderWithProviders = (
  ui,
  { providerProps = {}, ...renderOptions } = {}
) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      <CssBaseline />
      <Router>{ui}</Router>
    </ThemeProvider>,
    renderOptions
  );
};

describe("SidebarNav", () => {
  test("Renders SidebarNav component", () => {
    renderWithProviders(<SidebarNav open={true} />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test("Renders with correct menu items when open", () => {
    renderWithProviders(<SidebarNav open={true} />);
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Employees/i)).toBeInTheDocument();
    expect(screen.getByText(/Orders/i)).toBeInTheDocument();
    expect(screen.getByText(/Marketing/i)).toBeInTheDocument();
  });

  test("Does not display text when closed", () => {
    renderWithProviders(<SidebarNav open={false} />);
    expect(screen.queryByText(/Dashboard/i)).toHaveClass(
      "MuiListItemText-primary",
      { exact: false }
    );
    expect(screen.queryByText(/Products/i)).toHaveClass(
      "MuiListItemText-primary",
      { exact: false }
    );
  });

  test("Clicking on menu items changes selected index", () => {
    renderWithProviders(<SidebarNav open={true} />);
    fireEvent.click(screen.getByText(/Products/i));
    const productsItem = screen
      .getByText(/Products/i)
      .closest(".MuiListItemButton-root");
    expect(productsItem).toHaveClass("Mui-selected");
  });
});
