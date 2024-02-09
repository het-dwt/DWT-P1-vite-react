import "./contact.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <div className="outerDiv">
      <div className="contact">
        <div className="contact-box">
          <label className="label">Contact Us</label>
        </div>
        <form>
          <div className="contact-box">
            <TextField
              type="text"
              label="Your Full Name"
              id="filled-size-small"
              variant="filled"
              size="small"
            />
            <TextField
              type="email"
              label="Your Email ID"
              id="filled-size-small"
              variant="filled"
              size="small"
            />
            <TextField
              type="text"
              label="Subject:"
              id="filled-size-small"
              variant="filled"
              size="medium"
            />
            <TextField
              type="text"
              label="Message:"
              id="filled-size-small"
              multiline
              variant="filled"
              rows={4}
            />
            <div>
              <Button variant="contained" value="reset" name="button">
                Cancle
              </Button>
              <Button
                style={{ marginLeft: "35px" }}
                variant="contained"
                name="button"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
