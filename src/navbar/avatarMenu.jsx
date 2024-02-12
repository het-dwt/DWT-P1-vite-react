import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import "./avatarMenu.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

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
          {" "}
          <AccountCircleIcon /> &nbsp;
          <Link to="/myprofile" style={{ textDecoration: 'none' }}>Profile</Link> 
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <ManageAccountsIcon />
          &nbsp;<Link to="/myAccount" style={{ textDecoration: 'none' }}>My Account</Link> 
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutIcon />
          &nbsp; Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
