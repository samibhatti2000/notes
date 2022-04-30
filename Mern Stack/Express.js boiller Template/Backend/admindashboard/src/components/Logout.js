import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "universal-cookie";
import { Navigate } from "react-router-dom";

const cookie = new Cookie();
const Logout = () => {
  const logout = async () => {
    try {
      const req = await axios.get("/api/v1/logout");

      let host = window.location.protocol
        .concat("//")
        .concat(window.location.host);
      let x = cookie.remove("logged");
      cookie.remove("logged", { path: "/" });
      cookie.remove("token", { path: "/", domain: `${host}` });
      console.log(x);
      if (req.data.success === true) {
        cookie.remove("logged", { path: "/" });
        cookie.remove("token", { path: "/", domain: `${host}` });
        setTimeout(() => {
          window.location.reload();
        }, 1);
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  useEffect(() => {
    logout();
  }, [logout]);

  let cklog = cookie.get("logged");
  if (cklog != "logged") {
    return <Navigate replace to="/login" />;
  }

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Logout;
