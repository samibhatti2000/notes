import { makeStyles } from "@mui/styles";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import DashSideBar from "./DashSideBar";
import axios from "axios";
import { fetchProduct } from "../../redux/reduxAxois/fetchProduct";
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
  rox_box: {
    margin: "0.1vmax",
  },
  row: {
    border: "1px solid black",
    padding: "1vmax",
  },
}));

const AdminProduct = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { product } = useSelector((state) => state.product);
  const navigate = useNavigate();

  console.log(product.length);

  let cklog = cookie.get('logged')
  if(cklog != "logged"){

    return <Navigate replace to="/admin/login" />;

  }


  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
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
        <div className={classes.flex_column}>
          <div className={classes.flex_center}>
            <div className={classes.row}>id</div>
            <div className={classes.row}>name</div>
            <div className={classes.row}>price</div>
            <div className={classes.row}>category</div>
            <div className={classes.row}>updt delete</div>
          </div>
          {product &&
            product.map((item, index) => (
              <div
                className={`${classes.flex_center}`}
                style={{ margin: "0.3vmax", alignSelf: "flex-start" }}
                key={index}
              >
                <div className={classes.row}>{product[index]._id}</div>
                <div className={classes.row}>{product[index].name}</div>
                <div className={classes.row}>{product[index].price}</div>
                <div className={classes.row}>{product[index].category}</div>
                <div className={classes.row}>
                  <EditIcon
                    sx={{ color: "green", margin: "0 0.2vmax" }}
                    onClick={() => {
                      navigate(`/admin/product/${product[index]._id}`);
                    }}
                  />
                  <DeleteSweepIcon
                    sx={{ color: "red", margin: "0 0.2vmax" }}
                    onClick={async () => {
                      const req = await axios.delete(
                        `https://btisoft.herokuapp.com/api/v1/admin/product/${product[index]._id}`
                      );
                      if (req.data.success === true) {
                        fetchProduct(dispatch);
                        window.alert("product deleted");
                      }
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
