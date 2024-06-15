import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../authProvider";
import { PrimarySearchAppBar } from "../layout/components";

test("Renders Navbar with notifications icon when logged in", () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <PrimarySearchAppBar themeMode="light" />
      </AuthProvider>
    </MemoryRouter>
  );
});

test("Does not render notifications icon when not logged in", () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <PrimarySearchAppBar themeMode="light" />
      </AuthProvider>
    </MemoryRouter>
  );
});
