import * as React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { styled, Breadcrumbs, Link, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledBox } from "../layout/Layout";

import logo from "../assets/images/logo.svg";

const LoginContainer = styled(Box)({
  margin: "auto",
  padding: "20px",
  width: "900px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
});

export const Register = () => {
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Box>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Register</Typography>
      </Breadcrumbs>

      <LoginContainer sx={{ marginTop: 5, paddingBottom: 5, width: "550px" }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              display: "flex",
              alignSelf: "center",
              height: "30px",
              transition: "all 0.5s ease",
              marginTop: "20px",
            }}
          />
        </Typography>
        <Stack direction="column" gap={3}>
          <Typography
            marginBottom={-1}
            sx={{ fontWeight: "bold", fontSize: 12 }}
          >
            Username
          </Typography>
          <TextField label="Login" sx={{ width: "350px" }} />
          <Typography
            marginBottom={-1}
            sx={{ fontWeight: "bold", fontSize: 12 }}
          >
            Email address
          </Typography>
          <TextField label="Email" sx={{ width: "350px" }} />
          <Typography
            marginBottom={-1}
            sx={{ fontWeight: "bold", fontSize: 12 }}
          >
            Password
          </Typography>
          <TextField label="Password" sx={{ width: "350px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></Box>
          <Button
            variant="contained"
            sx={{
              background: "#5d87ff",
              color: "#fff",
              width: "100%",
              textTransform: "capitalize",
              "&:hover": {
                background: "#ECF2FF",
                color: "#5d87ff",
              },
            }}
            disableRipple
          >
            Sign Up
          </Button>
          <Box
            sx={{
              display: "flex",

              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <Typography sx={{ color: "#000" }}>
              Already have an Account?
            </Typography>
            <Link
              variant="containted"
              disableRipple
              href="/login"
              color="#5d87ff"
              sx={{ "&:hover": { color: "#5d87ff" } }}
            >
              Sign In
            </Link>
          </Box>
        </Stack>
      </LoginContainer>
    </Box>
  );
};
