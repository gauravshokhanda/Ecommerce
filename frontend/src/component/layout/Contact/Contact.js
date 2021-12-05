import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1> Click on the Given Email </h1>
      <a className="mailBtn" href="mailto:gauravshokanda2@gmail.com">
        
        <Button>Contact: gauravshokanda2@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
