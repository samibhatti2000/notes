import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Typography, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import logo from "../../../img/BTisoft.png";
import { Navlink } from "./NavLink";

const headerStyle = makeStyles({
  DexBar: {
    position: "fixed",
    width: "100%",
    backgroundColor:"#1E1926 !important"
  },
  font01: {
    color: "white",
  },
  display_block: {
    display: "block !important",
    marginRight: "2vmax !important",
    // backgroundColor:'red !important'
  },
});
const data = Navlink;

export const Dexknav = () => {
  const classes = headerStyle();

  return (
    <>
      <AppBar className={classes.DexBar}>
        <Toolbar>
          <Typography
            variant="h4"
            color="white"
            sx={{ wordWrap: "none", whiteSpace: "nowrap" }}
          >
            SAMEER BHATTI
          </Typography>
          <div style={{ width: "100%" }}></div>
          {data.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={data[index].to}
              className={classes.display_block}
              color="primary"
            >
              <Typography className={classes.font01}>
                {data[index].name}
              </Typography>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};
