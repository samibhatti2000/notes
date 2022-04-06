import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import {
  getContact,
  postContact,
  clearErrors,
} from "../../redux/actions/contactAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useState } from "react";
import axios from "axios";
import whatsapp from "../../img/whatsapp.jpeg";
import { fetchContact } from "../../redux/reduxAxois/fetchContact";

const useStyle = makeStyles((theme) => ({
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenterColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Contact = () => {
  const alert = useAlert();

  const contact = useSelector((state) => state.contact);
  const { allQuries, loading } = contact;

  const dispatch = useDispatch();
  const classes = useStyle();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [massage, setMassage] = useState();
  const [loader, setLoader] = useState(true);

  // const fetchContact = async ()=>{
  //   const req = await axios.get('/api/v1/contact').catch((error)=>{
  //       alert.error(error);
  //       console.log(error);
  //   })
  //   const data = req.data.allQuries
  //   console.log(data);
  //   dispatch(getContact(data));
  //   return data

  // }
  const postContact = async (data) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const req = await axios
      .post("https://btisoft.herokuapp.com/api/v1/post/contact", data, config)
      .catch((error) => {
        console.log(error);
      });
    if (req.data.success === true) {
      alert.success("massage sent sucessfully");
    }
    // alert.success("your massage sent successfully")
  };

  useEffect(() => {
    fetchContact(dispatch);
    if (!loading) {
      setLoader(false);
    }
  }, [dispatch, alert]);

  const contactSubmit = (e) => {
    e.preventDefault();

    const myform = new FormData();
    myform.set("name", name);
    myform.set("email", email);
    myform.set("phone", phone);
    myform.set("massage", massage);
    postContact(myform);
  };
  return (
    <>
      <div
        className={`${classes.gardent01} ${classes.flexCenterColumn}`}
        style={{
          maxWidth: "100vw !important",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          className={classes.flexCenterColumn}
          style={{ textAlign: "center" }}
        >
          <Typography variant="h2" color="white" sx={{ marginTop: "15vmax" }}>
            Get in touch
            <hr style={{ width: "40vw" }} />
          </Typography>

          <form
            className={classes.flexCenterColumn}
            onSubmit={contactSubmit}
            style={{ width: "50vmax", height: "50vmax", opacity: "0.8" }}
          >
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{
                padding: "0.6vmax",
                margin: "0.8vmax 5vmax",
                width: "30vmax",
              }}
            />
            <input
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                padding: "0.6vmax",
                margin: "0.8vmax 5vmax",
                width: "30vmax",
              }}
            />
            <input
              type="tel"
              value={phone}
              placeholder="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              style={{
                padding: "0.6vmax",
                margin: "0.8vmax 5vmax",
                width: "30vmax",
              }}
            />
            <textarea
              type="textarea"
              value={massage}
              placeholder="massage"
              onChange={(e) => {
                setMassage(e.target.value);
              }}
              style={{
                padding: "0.6vmax",
                margin: "0.8vmax 4vmax",
                width: "32vmax",
              }}
            />
            <Button
              type="submit"
              color="secondary"
              sx={{
                padding: "0.3vmax",
                margin: "1.2vmax",
                width: "10vmax",
                fontSize: "1.5vmax",
              }}
            >
              Submit
            </Button>
          </form>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div style={{ height: "50vmax", padding: "0vmax 5vmax" }}>
          <Typography variant="h4" color="white">
            Email:{" "}
            <a
              href="mailto:contact@btisoft.site"
              style={{ textDecoration: "none" }}
            >
              contact@btisoft.site
            </a>
            <br />
            <br />
            Skype:{" "}
            <a
              href="https://join.skype.com/invite/w9hPBfTiIQPl"
              style={{ textDecoration: "none" }}
            >
              live:.cid.e53ec18fc236f166
            </a>
            <br />
            <br />
            <p>Whatsapp us:</p>
            <a href="https://wa.me/message/OVEDPNAAFOVYA1">
              <img src={whatsapp} style={{ width: "20vmax" }} />
            </a>
            <br />
            <br />
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Contact;
