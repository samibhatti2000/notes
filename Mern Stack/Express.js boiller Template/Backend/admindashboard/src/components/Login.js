import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "universal-cookie";
const cookie = new Cookie();

const Login = () => {
  const [holderinfo, setHolderinfo] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    setHolderinfo({ ...holderinfo, [name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Accept-Encoding": "gzip, deflate, br",
          Accept: "/",
        },
      };
      const req = await axios.post("/api/v1/login", holderinfo, config);

      if (req.data.success === false) {
        toast.error(`${req.data.massage}`);
      }
      if (req.data.success === true) {
        toast.success("login succesful");
        console.log("login successfull");
        // window.localStorage.setItem("token", "logged");
        cookie.set("logged", "logged", { sameSite: "strict" });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  let cklog = cookie.get("logged");
  if (cklog === "logged") {
    return <Navigate replace to="/" />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1
        style={{
          padding: "1vmax",
          margin: "2vmax",
        }}
      >
        <Link to="/">Login</Link>
      </h1>
      <div className="form">
        <form
          onSubmit={formSubmit}
          className="form"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "40vw",
          }}
        >
          <input
            type="text"
            onChange={handleInput}
            value={holderinfo.email}
            placeholder="email"
            name="email"
            id="email"
            style={{
              padding: "1vmax",
              margin: "1vmax",
              width: "40vw",
            }}
          />
          <input
            type="password"
            onChange={handleInput}
            value={holderinfo.password}
            placeholder="password"
            name="password"
            id="password"
            style={{
              padding: "1vmax",
              margin: "1vmax",
              width: "40vw",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "1vmax",
              margin: "3vmax",
              width: "30vw",
              backgroundColor: "#60506F",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
