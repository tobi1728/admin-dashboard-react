import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import MailOutline from "@mui/icons-material/MailOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListAlt from "@mui/icons-material/ListAlt";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authProvider";
import { generateRandomNotifications } from "../../employee/mocks/notificationsMock";
import { formatDistanceToNow } from "date-fns";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#1D1D1D" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.05)
      : alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.1)
        : alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1D1D1D" : "#fff",
  color: "#5A6A85",
  border: 0,
  boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  marginLeft: 20,
  justifyContent: "center",
  verticalAlign: "middle",
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  padding: theme.spacing(1),
  position: "absolute",
  top: 47,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  marginLeft: "20px",
  marginRight: "20px",
  fontSize: "0.9rem",
  color: "#5A6A85",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: 10,
  "&:hover": {
    backgroundColor: "#ECF2FF",
    borderRadius: "8px",
    color: "#5D87FF",
  },
  "& .notification-date": {
    marginLeft: "auto",
    fontSize: "0.8rem",
    color: "#a0a0a0",
  },
}));

const StyledMenuButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5d87ff",
  color: "#fff",
  padding: "5px 15px",
  margin: "15px 20px 0 40px",
  borderRadius: "8px",
  textTransform: "capitalize",
  fontSize: "12px",

  "&:hover": { backgroundColor: "#577dea", color: "#fff" },
}));

export const PrimarySearchAppBar = ({
  themeMode,
  setThemeMode,
  toggleSidebar,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotifications, setAnchorElNotifications] =
    React.useState(null);
  const [notifications, setNotifications] = React.useState([]);
  const [notificationCount, setNotificationCount] = React.useState(0);

  React.useEffect(() => {
    if (isLoggedIn) {
      const userNotifications = generateRandomNotifications(user);
      setNotifications(userNotifications);
      setNotificationCount(userNotifications.length);
    } else {
      setNotifications([]);
      setNotificationCount(0);
    }
  }, [isLoggedIn, user]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNotificationsMenuOpen = Boolean(anchorElNotifications);

  const settings = ["Profile", "Account", "Tasks", "Logout"];
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNotificationsMenuOpen = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleNotificationsMenuClose = () => {
    setAnchorElNotifications(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <StyledMenuItem onClick={() => navigate("/profile")}>
        <AccountCircle sx={{ marginRight: 2 }} /> Profile
      </StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>
        <MailOutline sx={{ marginRight: 2 }} /> My account
      </StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>
        <ListAlt
          sx={{
            marginRight: 2,
          }}
        />
        My Tasks
      </StyledMenuItem>
      {isLoggedIn ? (
        <StyledMenuButton
          variant="contained"
          sx={{ width: 150 }}
          onClick={logout}
        >
          <Logout sx={{ marginRight: 2 }} /> Logout
        </StyledMenuButton>
      ) : (
        <StyledMenuButton
          variant="contained"
          sx={{ width: 150 }}
          onClick={() => navigate("/login")}
        >
          <Logout sx={{ marginRight: 2 }} /> Sign in
        </StyledMenuButton>
      )}
    </StyledMenu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <StyledMenu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isLoggedIn && (
        <StyledMenuItem>
          <IconButtonStyled
            size="large"
            aria-label={`show ${notificationCount} new notifications`}
            color="inherit"
            onClick={handleNotificationsMenuOpen}
          >
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButtonStyled>
          <p>Notifications</p>
        </StyledMenuItem>
      )}
      <StyledMenuItem onClick={handleProfileMenuOpen}>
        <IconButtonStyled onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/assets/images/my_photo.jpg" />
        </IconButtonStyled>
        <p>Profile</p>
      </StyledMenuItem>
    </StyledMenu>
  );

  const renderNotificationsMenu = (
    <StyledMenu
      anchorEl={anchorElNotifications}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="primary-notifications-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isNotificationsMenuOpen}
      onClose={handleNotificationsMenuClose}
    >
      {notifications.map((notification, index) => (
        <StyledMenuItem key={index}>
          {notification.message}
          <Typography className="notification-date">
            {formatDistanceToNow(new Date(notification.date), {
              addSuffix: true,
            })}
          </Typography>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBarStyled position="static">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {isLoggedIn && (
              <IconButtonStyled
                size="large"
                aria-label={`show ${notificationCount} new notifications`}
                color="inherit"
                onClick={handleNotificationsMenuOpen}
              >
                <Badge badgeContent={notificationCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButtonStyled>
            )}
            <FormControlLabel
              control={
                <MaterialUISwitch
                  checked={themeMode === "dark"}
                  onChange={(event) => {
                    setThemeMode(event.target.checked ? "dark" : "light");
                  }}
                  sx={{ ml: 5 }}
                />
              }
            />
            {isLoggedIn ? (
              <>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography sx={{ color: "#5A6A85", fontSize: "0.9rem" }}>
                    {`Hello, ${user?.name}`}
                  </Typography>
                </Box>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt={user?.name} src={user?.photo} />
                </IconButton>
              </>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt="" src="" />
              </IconButton>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarStyled>
      {renderMobileMenu}
      {renderMenu}
      {renderNotificationsMenu}
    </Box>
  );
};
