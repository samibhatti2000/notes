import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "universal-cookie";
const cookie = new Cookie();

const Dashboard = () => {
  const [holderinfo, setHolderinfo] = useState({
    pubkey: "",
    location: "",
  });
  const [allNftHolders, setAllNftHolders] = useState();
  const [errormsg, setErrormsg] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    setHolderinfo({ ...holderinfo, [name]: e.target.value });
  };

  const deleteOne = async (id) => {
    try {
      const result = await axios.delete(`/api/v1/delete/nftholder/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.data.success === false) {
        toast.error(`${result.data.massage}`);
      }
      if (result.data.success === true) {
        toast.success("User Deleted Sucessfully");
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = await axios.post(
        "/api/v1/create/nftholder",
        holderinfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (postData.data.success === false) {
        toast.error(`${postData.data.massage}`);
      }
      if (postData.data.success === true) {
        toast.success("User Register Sucessfully");
        setTimeout(() => {
          setHolderinfo({
            pubkey: "",
            location: "",
          });
        }, 400);
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const getALlNftHolders = async () => {
    const result = await axios.get("/api/v1/getall/nftholders");
    const data = result.data.NftHolder;
    setAllNftHolders(data);
  };

  useEffect(() => {
    getALlNftHolders();
  }, [getALlNftHolders, Navigate]);

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
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1
        style={{
          padding: "1vmax",
          margin: "2vmax",
        }}
      >
        <Link to="/">ENTNFT DASHBOARD</Link>
      </h1>
      <div
        className="form"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
            placeholder="Public key"
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
            placeholder="Location"
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
            Submit
          </button>
        </form>
      </div>
      <div
        className="all_contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          miHeight: "100vh",
          width: "100%",
        }}
      >
        <table
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
            color: "white",
          }}
        >
          <thead>
            <tr>
              <th>Public Key</th>
              <th>Location</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allNftHolders &&
              allNftHolders.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item.pubkey}</td>
                    <td>{item.location}</td>
                    <td>
                      <Link to={`/update/${item._id}`}>edit</Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteOne(item._id);
                          getALlNftHolders();
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
