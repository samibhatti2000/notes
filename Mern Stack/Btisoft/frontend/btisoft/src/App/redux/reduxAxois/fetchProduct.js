import axios from "axios";
import { getOneProduct, getProduct } from "../actions/productAction";


export const fetchProduct = async (dispatch) => {
  const req = await axios.get("https://btisoft.herokuapp.com/api/v1/products").catch((error) => {
    console.log(error);
  });
  const data = req.data.products;
  dispatch(getProduct(data));
};

export const fetchOneProduct = (id)=> async (dispatch) => {
  const req = await axios.get(`https://btisoft.herokuapp.com/api/v1/product/${id}`).catch((error) => {
    console.log(error);
  });
  const data = req.data.product
  dispatch(getOneProduct(data));
};

export const putOneProduct =  (id) => async (mydata) => { 
  const config = {
    Headers:{'Content-Type':'application/json'}
  }
  const req = await axios.put(`https://btisoft.herokuapp.com/api/v1/admin/product/${id}`,mydata,config).catch((error) => {
    console.log(error);
  });
  if(req.data.success === true){
    window.alert('product updated')
    console.log('product updated')
  }
};
