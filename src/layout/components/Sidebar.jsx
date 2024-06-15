import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import logoCollapsed from "../../assets/images/logo-collapsed.svg";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CellTowerIcon from "@mui/icons-material/CellTower";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";

const drawerWidth = 240;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ECF2FF",
    color: "#5D87FF",
    maxWidth: 220,
    padding: 10,
    borderRadius: "8px",
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "{ theme }",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: { theme },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItemStyled = styled(ListItemButton)(({}) => ({
  "&.Mui-selected": {
    backgroundColor: "#5D87FF",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#ECF2FF",
      borderRadius: "8px",
    },
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#fff",
    },
  },
  "&:hover": {
    backgroundColor: "#ECF2FF",
    borderRadius: "8px",
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#5D87FF",
    },
  },

  "& .MuiListItemIcon-root": {
    color: "#5A6A85",
  },

  "& .MuiListItemText-primary": {
    color: "#5A6A85",
  },
  margin: "8px 8px",
  padding: "8px 12px",
}));

const ListSubheaderStyled = styled(ListSubheader)(({ open }) => ({
  fontSize: "0.75rem",
  fontWeight: "bold",
  color: "#5A6A85",
}));

const LogoContainer = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "30px",
  transition: "all 0.6s ease",
  overflow: "hidden",
}));

export const SidebarNav = ({ open, children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { theme } = useContext(ThemeContext);
  const logoColor = theme === "dark" ? "#FFFFFF" : "#000000";

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <LogoContainer open={open} style={{ color: logoColor }}>
            <img
              src={open ? logo : logoCollapsed}
              alt="Logo"
              style={{
                height: "30px",
                transition: "all 0.5s ease",
                fill: "currentColor",
              }}
            />
          </LogoContainer>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            paddingTop: 0,
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListSubheaderStyled component="div" id="nested-list-subheader">
            HOME
          </ListSubheaderStyled>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Dashboard</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/"
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DashboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemStyled>
          </HtmlTooltip>

          <ListSubheaderStyled
            component="div"
            id="nested-list-subheader"
          ></ListSubheaderStyled>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Products</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/product"
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <Inventory2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemStyled>
          </HtmlTooltip>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Employees</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/employees"
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <BadgeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemStyled>
          </HtmlTooltip>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Orders</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/orders"
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <LocalShippingOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemStyled>
          </HtmlTooltip>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Marketing</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/marketing"
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <CellTowerIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing" />
            </ListItemStyled>
          </HtmlTooltip>

          <ListSubheaderStyled component="div" id="nested-list-subheader">
            {open ? "AUTHORIZATION" : "AUTH"}
          </ListSubheaderStyled>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Login</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/login"
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <LoginOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemStyled>
          </HtmlTooltip>
          <HtmlTooltip
            sx={{ display: open ? "none" : "flex" }}
            title={
              <React.Fragment>
                <Typography>Register</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <ListItemStyled
              component={Link}
              to="/register"
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <PersonAddAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItemStyled>
          </HtmlTooltip>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
