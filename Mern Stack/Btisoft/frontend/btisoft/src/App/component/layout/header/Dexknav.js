import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Typography, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../../img/BTisoft.png";
import { Navlink } from "./NavLink";

const headerStyle = makeStyles({
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
      <AppBar
      color="primary"
      sx={{
        position:"fixed"
      }}
      >
        <Toolbar>
          <img
            src={logo}
            style={{ width: "15vmax", marginRight: "auto", padding: "0px" }}
          />

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

          {/* <p>we are here</p>
    {data.map((item)=>(
        <p>we are here</p>
        ))} */}
        </Toolbar>
      </AppBar>
    </>
  );
};
