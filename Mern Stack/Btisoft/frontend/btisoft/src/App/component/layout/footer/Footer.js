import { makeStyles } from "@mui/styles";
import React from "react";

import "./Footer.css";

const useStyle = makeStyles((theme) => ({
  color: {
    color: theme.palette.primary.font,
  },
  bckcolor: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <div id="footer" className={`${classes.bckcolor} ${classes.color} footer`}>
      <div className="leftFooter">
        {/* <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p> */}
        <a
          href="/Disclaimer"
          style={{ margin: "1vmax", textDecoration: "none" }}
        >
          Disclaimer
        </a>
        <a
          href="/PrivacyPolicy"
          style={{ margin: "1vmax", textDecoration: "none" }}
        >
          Privacy Policy
        </a>
        <a
          href="/TermsConditions"
          style={{ margin: "1vmax", textDecoration: "none" }}
        >
          Terms & Conditions
        </a>
      </div>

      <div className="midFooter">
        <h1>BTisoft</h1>
        <p>High Quality is our first priority</p>

        <a href="/CopyrightNotice">Copyrights 2021 &copy; BTIsoft</a>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.upwork.com/freelancers/~016fc01c9c4889c1b2?viewMode=1">
          upwork
        </a>
        <a href="https://www.freelancer.com/u/sameer8162">freelancer</a>
        <a href="#">Facebook</a>
      </div>
    </div>
  );
};

export default Footer;
