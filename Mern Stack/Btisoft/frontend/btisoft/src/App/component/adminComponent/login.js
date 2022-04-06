import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {fetchProduct} from "../../redux/reduxAxois/fetchProduct"
import {fetchContact} from "../../redux/reduxAxois/fetchContact"
import { userLogin, userLoginAction } from "../../redux/actions/userAction";
import { LoginUserpost } from "../../redux/reduxAxois/LoginUserpost";
import DashSideBar from "./DashSideBar";
import Cookie from "universal-cookie";
const cookie = new Cookie();



const useStyle = makeStyles((theme) => ({
  flex_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flex_column: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    width: "100vw",
    height: "100vh",
  },
  input: {
    padding: "1vmax",
    margin: "1vmax",
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    // fetchContact(dispatch)
    // fetchProduct(dispatch)

    

  }, [dispatch]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const alert = useAlert();
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    const myform = new FormData();
    myform.set("email", email);
    myform.set("password", password);
    // const redirect = location.search ? location.search.split("=")[1] : "/admin";
    
    LoginUserpost(myform)(dispatch);

    navigate('/admin')
  };
  const classes = useStyle();


  let cklog = cookie.get('logged')
  if(cklog === "logged"){

  return <Navigate replace to="/admin" />;

  }

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        width: "100vw",
        zIndex: "10000",
        background: "white",
      }}
    >
      <div className={`${classes.flex_center} ${classes.container}`}>
        <form onSubmit={submitLogin} className={classes.flex_column}>
          <input
            className={classes.input}
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className={classes.input}
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button sx={{ fontSize: "1.5vmax" }} color="secondary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
