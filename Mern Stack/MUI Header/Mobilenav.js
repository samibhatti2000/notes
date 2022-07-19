import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import logo from "../../../img/BTisoft.png";
import { Navlink } from "./NavLink";

const headerStyle = makeStyles({
  mobileAppBar: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80vw",
    backgroundColor:"#1E1926 !important"
  },
  font01: {
    color: "white",
  },
  display_block: {
    display: "block !important",
    margin: "auto",
  },
  hover: {
    "&:hover": {},
  },
});
const data = Navlink;

export const Mobilenav = ({ setMenuOpen }) => {
  const classes = headerStyle();

  return (
    <>
      <AppBar className={classes.mobileAppBar}>
        {/* <img
          src={logo}
          style={{ width: "25vmax", padding: "0px", marginBottom:'5vmax', marginTop:'5vmax',}}
        /> */}
        <Typography variant="h4" color="white">
          SAMEER BHATTI
        </Typography>
        <br />
        {data.map((item, index) => (
          <Button
            key={index}
            component={Link}
            to={data[index].to}
            className={classes.display_block}
            color="primary"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Typography className={`${classes.font01} hover`}>
              {data[index].name}
            </Typography>
          </Button>
        ))}
      </AppBar>
    </>
  );
};
