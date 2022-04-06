import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import DashSideBar from "./DashSideBar";
import Cookie from "universal-cookie";
const cookie = new Cookie();


const useStyle = makeStyles((theme) => ({
  flex_center: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  flex_column: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  input: {
    padding: "1vmax",
    margin: "1vmax",
  },
  createProductFormImage:{
    width: '100%',
    overflow: 'auto',
  },
  Formimg:{
    width: '3vmax',
    margin: '0 0.5vmax',
    margin:'1vmax 0.1vmax'

  },
  card: {
    padding: "2vmax",
    margin: "2vmax",
    border: "1px solid black",
    position: "relative",
  },
  deletIcon: {
    color: "red",
  },
}));

const AdminCreateProduct = () => {
  // const alert = useAlert();
  const classes = useStyle();

  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const createProduct = async (mydata) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const {data} = await axios.post("https://btisoft.herokuapp.com/api/v1/admin/product/new", mydata, config).then(
      console.log("product creadted successfull")).catch((error) => {
      console.error(error);
    });
    console.log(data);
    if (data.success === true) {
      window.alert("product created succesfull!");
      console.log("product created");
    }

  };
  const createProductForm = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    const dt = {
      "name":"test",
      "description":"test",
      "price":"2000",
      "category":"test",
      "public_id":"test",
      "url":"test",
      "images":0
  }

  createProduct(myForm);
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  let cklog = cookie.get('logged')
  if(cklog != "logged"){

    return <Navigate replace to="/admin/login" />;

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
      <DashSideBar />
      <div
        className={classes.flex_center}
        style={{ width: "100%", height: "100vh" }}
      >
        <form
          onSubmit={createProductForm}
          encType="multipart/form-data"
          className={classes.flex_column}
        >
          <input
            value={name}
            placeholder="product name"
            className={classes.input}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            value={description}
            placeholder="description"
            className={classes.input}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            value={price}
            placeholder="price"
            className={classes.input}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            value={category}
            placeholder="category"
            className={classes.input}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={createProductImagesChange}
            multiple
          />
          <div className={`${classes.createProductFormImage}${classes.input}`}>
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" className={classes.Formimg} />
            ))}
          </div>
          <Button color="secondary" type="submite">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateProduct;
