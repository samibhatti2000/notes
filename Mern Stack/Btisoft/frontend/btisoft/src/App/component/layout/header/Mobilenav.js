import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../../img/BTisoft.png";
import cursorp from "../../../img/circle-cursor-hover.png";
import { Navlink } from "./NavLink";
import theme from '../../../theme'


const headerStyle = makeStyles({
  mobileAppBar: {
    height: "100%",
    // justifyContent:'center',
    alignItems:'center',
    // backgroundColor:
  },
  font01: {
    color: "white",
  },
  display_block: {
    display: "block !important",
    margin:'auto',
  },
  hover: {
    "&:hover": {
      
    }
  }
});
const data = Navlink;

export const Mobilenav = ({setMenuOpen}) => {
  const classes = headerStyle();

  return (
    <>
      <AppBar className={classes.mobileAppBar}>
        <img
          src={logo}
          style={{ width: "25vmax", padding: "0px", marginBottom:'5vmax', marginTop:'5vmax',}}
        />

        {data.map((item, index) => (
          <Button
            key={index}
            component={Link}
            to={data[index].to}
            className={classes.display_block}
            color='primary'
            onClick={()=>{
              setMenuOpen(false)
            }}
          >
            <Typography className={`${classes.font01} hover`}
            >
              {data[index].name}
            </Typography>
          </Button>
        ))}

        {/* <p>we are here</p>
    {data.map((item)=>(
        <p>we are here</p>
        ))} */}
      </AppBar>
    </>
  );
};
