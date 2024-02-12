import React from "react";
import "./myprofile.css";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

const Profile = () => {
  return (
    <div className="profile-outerDiv">
      <Box className="profile" sx={{ width: '100%' }}>
        <Grid container>
          <Grid xs="4">
            <Paper elevation={4}>
              <div>
                {" "}
              <h4>el=4</h4>
              </div>
            </Paper>
          </Grid>
          <Grid xs="8">
            <Paper elevation={8}>
            <h4>el=8</h4>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Profile;
