import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ProcuctCard } from "./ProcuctCard";
import Typography from "@mui/material/Typography";

const useStyle = makeStyles((theme) => ({
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  flexCenterColumn: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
  },
}));

const Products = () => {
  const classes = useStyle();
  const { product } = useSelector((state) => state.product);

  return (
    <>
      <div
        className={`${classes.gardent01} ${classes.flexCenter}`}
        style={{ maxWidth:"100vw !important", minHeight: "100vh", overflow:'hidden', textAlign:'center'}}
      >
        <Typography
          variant="h1"
          color="white"
          style={{ textAlign:'center',marginTop: "10vmax", marginBottom: "1vmax" }}
        >
          Products
          <br />
          <hr style={{ width: "40vw" }} />
        </Typography>
        <div
          style={{ marginTop: "10vmax", marginBottom: "5vmax" }}
          className={`${classes.flexCenter}`}
        >
          {product &&
            product.map((item, index) => (
              <ProcuctCard product={product} index={index} key={index}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
