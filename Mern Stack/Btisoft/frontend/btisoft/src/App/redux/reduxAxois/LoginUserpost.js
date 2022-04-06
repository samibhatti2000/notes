import axios from "axios";
import { Navigate } from "react-router-dom";
import Cookie from "universal-cookie";
import { userLoginAction } from "../actions/userAction";

const cookie = new Cookie();

export const LoginUserpost = (mydata) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Accept-Encoding": "gzip, deflate, br",
      Accept: "/",
    },
  };
  const req = await axios
    .post("https://btisoft.herokuapp.com/api/v1/login", mydata, config)
    .catch((error) => {
      console.log(error);
      window.alert(`${error}`);
    });
  if (req.data.success === false) {
    window.alert(`${req.data.massage}`);
  }
  if (req.data.success === true) {
    window.alert("login succesful");
    console.log("login successfull");
    // window.localStorage.setItem("token", "logged");
    cookie.set("logged", "logged", { sameSite: "strict" });
    window.location.reload();
  }

  const data = { user: req.data.user };
  dispatch(userLoginAction(data));
};
