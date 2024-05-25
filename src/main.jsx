import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { Dashboard } from "./dashboard";
import { ProductPage } from "./product";
import { EmployeesPage } from "./employee";
import { Layout } from "./layout";
import { Orders } from "./orders";
import { Login } from "./login";
import { Register } from "./register";
import { Marketing } from "./marketing";
import { Profile } from "./profile";
import { AuthProvider } from "./authProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
