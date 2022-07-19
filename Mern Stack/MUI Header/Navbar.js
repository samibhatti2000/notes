import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
// import logo from "../../../img/BTisoft.png";
import { Dexknav } from "./Dexknav";
import { Mobilenav } from "./Mobilenav";

const headerStyle = makeStyles({
  font01: {
    color: "white",
  },
  display_block: {
    display: "block !important",
    marginRight: "2vmax !important",
  },
});

const Navbar = () => {
  const classes = headerStyle();
  const mobileMedia = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(false);
  const [menuopen, setMenuOpen] = useState(false);

  return (
    <>
      {mobileMedia ? (
        <div>
          {menuopen ? (
            <CloseIcon
              style={{
                zIndex: "10000",
                position: "fixed",
                top: "10px",
                right: "1vmax",
                color: "white",
              }}
              onClick={() => {
                setMenuOpen(!menuopen);
              }}
              fontSize="large"
            />
          ) : (
            <MenuIcon
              style={{
                zIndex: "10000",
                position: "fixed",
                top: "10px",
                right: "1vmax",
                color: "white",
              }}
              onClick={() => {
                setMenuOpen(!menuopen);
              }}
              fontSize="large"
            />
          )}

          {menuopen === true ? (
            <>
              {" "}
              <Mobilenav setMenuOpen={setMenuOpen} />
            </>
          ) : null}
        </div>
      ) : (
        <Dexknav />
      )}

      {/* <img src={logo} style={{width:"5vmax", marginRight:'40vmax'}}/>


          <Button component={Link} to="/home" className={classes.display_block}>
          <Typography className={classes.font01}>home</Typography>
          </Button>

          <Button component={Link} to="/product" className={classes.display_block}>
          <Typography className={classes.font01}>Product</Typography>
          </Button>

          <Button component={Link} to="/pricing" className={classes.display_block}>
          <Typography className={classes.font01}>Pricing</Typography>
          </Button>

          <Button component={Link} to="/contact" className={classes.display_block}>
          <Typography className={classes.font01}>Contact</Typography>
          </Button>

          <Button component={Link} to="/about" className={classes.display_block}>
          <Typography className={classes.font01}>About</Typography>
          </Button> */}
    </>
  );
};

export default Navbar;
