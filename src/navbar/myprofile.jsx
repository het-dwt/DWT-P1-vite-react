import React from "react";
import "./myprofile.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  return (
    <div className="profile-outerDiv">
      <Box className="profile" sx={{ width: "96%" }}>
        <Grid container direction="row" columnSpacing={2}>
          <Grid xs="6" md="4">
            <Paper elevation={1} square>
              <div id="paper1">
                <div>
                  <Avatar sx={{ bgcolor: "#3B9932" }} variant="rounded">
                    HG
                  </Avatar>
                </div>
                <div id="personDetails">
                  <small>Name:</small>
                  <small>Het Gajjar</small>
                  <br />
                  <small>Email:</small>
                  <small>abc@gmail.com</small>
                </div>
              </div>
            </Paper>
          </Grid>
          {/* <Grid xs="6" md="8">
            <Paper elevation={1} square>
              <h4>el=8</h4>
            </Paper>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
};
export default Profile;
