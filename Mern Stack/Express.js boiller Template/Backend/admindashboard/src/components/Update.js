import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "universal-cookie";
const cookie = new Cookie();

const Update = () => {
  const [holderinfo, setHolderinfo] = useState({
    pubkey: "",
    location: "",
  });
  const params = useParams();

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    setHolderinfo({ ...holderinfo, [name]: e.target.value });
  };
  const getOneNftHolder = async () => {
    try {
      const result = await axios.get(`/api/v1/getone/nftholder/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = result.data.NftHolder;
      setHolderinfo({
        pubkey: data.pubkey,
        location: data.location,
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        `/api/v1/update/nftholder/${params.id}`,
        holderinfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.data.success === false) {
        toast.error(`${result.data.massage}`);
      }
      if (result.data.success === true) {
        toast.success("User Updated Sucessfully");
      }

      console.log(`${"hilllo"}`);
      const data = result.data.NftHolder;
      setHolderinfo({
        pubkey: data.pubkey,
        location: data.location,
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getOneNftHolder();
  }, []);

  let cklog = cookie.get("logged");
  if (cklog != "logged") {
    return <Navigate replace to="/login" />;
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
        <Link to="/">BACK TO ENTNFT DASHBOARD</Link>
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
            value={holderinfo.pubkey}
            placeholder={holderinfo.pubkey}
            name="pubkey"
            id="pubkey"
            style={{
              padding: "1vmax",
              margin: "1vmax",
              width: "40vw",
            }}
          />
          <input
            type="text"
            onChange={handleInput}
            value={holderinfo.location}
            placeholder={holderinfo.location}
            name="location"
            id="location"
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
            Update
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Update;
