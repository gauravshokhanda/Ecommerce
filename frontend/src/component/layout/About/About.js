import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/gauravshokhanda";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://lh3.googleusercontent.com/5T98GKHgIhSaTK7mRoBLeRm2q6mwIDe1Y0JTzQL7Xf6Co6Vw0JWotfPOxYmSCttGoFdSEkhw0Qf6GhMXJROIuna9DVpxZ3aWPhLncRLS"
              alt="Founder"
            />
            <Typography>Gaurav Shokhanda</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Gaurav Shokhanda. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Github And Instagram Links </Typography>
            <a
              href="https://github.com/gauravshokhanda"
              target="blank"
            >
              <GitHubIcon className="githubSvgIcon" />
            </a>

            <a href="https://instagram.com/gauravshokhanda" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
