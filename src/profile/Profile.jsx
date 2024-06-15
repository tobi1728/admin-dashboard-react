import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Button,
  Chip,
  Divider,
  Breadcrumbs,
  Link,
  styled,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useAuth } from "../authProvider";
import { employeesMock } from "../employee/mocks/employeesMock";
import { useNavigate } from "react-router-dom";

const StyledMenuButton = styled(Button)(({}) => ({
  backgroundColor: "#5d87ff",
  color: "#fff",
  padding: "5x 15px 5px 15px",
  margin: "5px 15px 0 15px",
  borderRadius: "8px",
  textTransform: "capitalize",
  fontSize: "12px",

  "&:hover": { backgroundColor: "#577dea", color: "#fff" },
}));

export const Profile = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  const employee = employeesMock.find(
    (emp) => emp.name === user.name && emp.surname === user.surname
  );

  if (!employee) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Employee not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Profile</Typography>
      </Breadcrumbs>

      <Grid container spacing={2} mt={5} px={5} justifyContent={"center"}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src={employee.picture}
                alt={`${employee.name} ${employee.surname}`}
                sx={{
                  width: 100,
                  height: 100,
                  margin: "auto",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
                }}
              />
              <Typography variant="h5" sx={{ mt: 2 }}>
                {`${employee.name} ${employee.surname}`}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.role}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.seniority} experience
              </Typography>
              <Box sx={{ mt: 2 }}>
                <StyledMenuButton
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1, boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)" }}
                >
                  Follow
                </StyledMenuButton>
                <StyledMenuButton
                  variant="outlined"
                  color="primary"
                  sx={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)" }}
                >
                  Message
                </StyledMenuButton>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  <strong>Email:</strong> {employee.email || "Not available"}
                </Typography>
                <Typography variant="body2">
                  <strong>Phone:</strong> {employee.phoneNumber}
                </Typography>
                <Typography variant="body2">
                  <strong>Address:</strong>{" "}
                  {employee.address || "Not available"}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Details</Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <strong>Full Name:</strong>{" "}
                    {`${employee.name} ${employee.surname}`}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Role:</strong> {employee.role}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Salary:</strong> {employee.salary}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Sales:</strong> {employee.sales}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <strong>Mobile:</strong> {employee.phoneNumber}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Address:</strong>{" "}
                    {employee.address || "Not available"}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card
            sx={{
              my: 2,
            }}
          >
            <CardContent sx={{}}>
              <Typography variant="h6">Hobbies</Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography sx={{ mb: 4.5 }}>
                {employee.hobbies
                  ? employee.hobbies.join(", ")
                  : "Not available"}
              </Typography>
              <Grid container spacing={4}>
                <Grid item>
                  <WebIcon data-testid="WebIcon" sx={{ color: "#1976d2" }} />
                </Grid>
                <Grid item>
                  <TwitterIcon
                    data-testid="TwitterIcon"
                    sx={{ color: "#1da1f2" }}
                  />
                </Grid>
                <Grid item>
                  <FacebookIcon
                    data-testid="FacebookIcon"
                    sx={{ color: "#4267b2" }}
                  />
                </Grid>
                <Grid item>
                  <InstagramIcon
                    data-testid="InstagramIcon"
                    sx={{ color: "#e1306c" }}
                  />
                </Grid>
                <Grid item>
                  <YouTubeIcon
                    data-testid="YouTubeIcon"
                    sx={{ color: "#ff0000" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
