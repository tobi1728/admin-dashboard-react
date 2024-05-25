import * as React from "react";
import {
  Stack,
  TextField,
  Button,
  Typography,
  Alert,
  Breadcrumbs,
  Link,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Box,
} from "@mui/material";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authProvider";
import { validLogins } from "./mocks/validLogins";
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

export const Login = () => {
  const { login: performLogin } = useAuth();
  const navigate = useNavigate();
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validationError, setValidationError] = React.useState(false);

  const validateLogin = () =>
    Boolean(
      validLogins.find(
        (item) => item.login === login && item.password === password
      )
    );

  const resetError = () => setValidationError(false);
  const handleLogin = () => {
    const isValidLogin = validateLogin();

    if (!isValidLogin) {
      setValidationError(true);
      return;
    }

    const currentUser = validLogins.find((item) => item.login === login);

    performLogin(currentUser);
    navigate("/");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Box>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Login</Typography>
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
          <TextField
            label="Login"
            value={login}
            onFocus={resetError}
            onChange={(event) => setLogin(event.target.value)}
            sx={{ width: "350px" }}
          />
          <Typography
            marginBottom={-1}
            sx={{ fontWeight: "bold", fontSize: 12 }}
          >
            Password
          </Typography>
          <TextField
            label="Password"
            value={password}
            onFocus={resetError}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ width: "350px" }}
            type="password"
          />{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    disableRipple
                    sx={{
                      display: "flex",
                      color: "#5d87ff",
                      "&.Mui-checked": {
                        color: "#5d87ff",
                      },
                    }}
                  />
                }
                label="Remember this Device"
              />
            </FormGroup>
            <Typography sx={{ fontSize: "14px" }}>
              <Link
                href="/"
                color="#5d87ff"
                sx={{ "&:hover": { color: "#5d87ff" } }}
              >
                Forgot your password?
              </Link>
            </Typography>
          </Box>
          <Button
            onClick={handleLogin}
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
            Sign in
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <Typography sx={{ color: "#000" }}>New to the site?</Typography>
            <Link
              onClick={handleRegister}
              variant="containted"
              disableRipple
              href="/register"
              color="#5d87ff"
              sx={{ "&:hover": { color: "#5d87ff" } }}
            >
              Create an account
            </Link>
            {validationError && (
              <Typography
                variant="h1"
                sx={{
                  width: "370px",
                  margin: "auto",
                  position: "absolute",
                  bottom: 240,
                }}
              >
                <Alert severity="error">Login or password incorrect</Alert>
              </Typography>
            )}
          </Box>
        </Stack>
      </LoginContainer>
    </Box>
  );
};
