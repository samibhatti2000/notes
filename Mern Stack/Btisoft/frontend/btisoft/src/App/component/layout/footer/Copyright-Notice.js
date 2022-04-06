import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";

export const CopyrightNotice = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1e1926" }}>
        <p style={{ padding: "10vmax", color:'white' }}>
          <Button
            variant="text"
            color="secondary"
            component={Link}
            to="/home"
            sx={{ zIndex: "100", marginTop: "5vmax" }}
          >
            back to: /home
          </Button>
          <h1>Copyright Notice</h1>
          This website and its content is copyright of BTIsoft TV -© BTIsoft 2022. All rights reserved. Any redistribution or
          reproduction of part or all of the contents in any form is prohibited
          other than the following: you may print or download to a local hard
          disk extracts for your personal and non-commercial use only you may
          copy the content to individual third parties for their personal use,
          but only if you acknowledge the website as the source of the material
          You maynot, except with our express written permission, distribute or
          commerciallyexploit the content. Nor may you transmit it or store it
          in any other websiteor other form of electronic retrieval system
        </p>
      </div>
    </>
  );
};
