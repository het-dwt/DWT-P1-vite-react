import "./avatarMenu.css";
import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function AvatarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "#3B9932" }} variant="rounded">
          HG
        </Avatar>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon /> &nbsp;
          <Link to="/myprofile" style={{ textDecoration: "none" }}>
            Profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <PersonAddIcon />
          &nbsp;
          <Link to="/signin" style={{ textDecoration: "none" }}>
            Add Another Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SettingsIcon />
          &nbsp;
          <Link to="/setting" style={{ textDecoration: "none" }}>
            Setting
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            alert("Logged Out Sucesfuly.");
          }}
        >
          <LogoutIcon />
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
