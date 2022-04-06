import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { fetchOneProduct, putOneProduct } from '../../redux/reduxAxois/fetchProduct';
import DashSideBar from './DashSideBar';
import Cookie from "universal-cookie";
const cookie = new Cookie();


const useStyle = makeStyles((theme)=>({
    flex_center:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    flex_column:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    },
    rox_box:{
      margin:'0.1vmax'
    },
    row:{
      border:'1px solid black',
      padding:'1vmax'
    }
  }))

const AdminUpdateProduct = ({id}) => {

    const dispatch = useDispatch();
    const params = useParams();
    const {product} = useSelector((state)=>state.onProduct);
    const {images} = product

    useEffect(()=>{
      // const product = axios.get(`/api/v1/product/ `)
      fetchOneProduct(params.id)(dispatch);

      // console.log(product);
    },[dispatch])

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);

    
    const putreq = async ()=>{

      const data={
        "name":name,
        "price":price,
        "category":category,
        "description":description
      }

      putOneProduct(params.id)(data);

    }
    
    const classes = useStyle();

    let cklog = cookie.get('logged')
    if(cklog != "logged"){
  
      return <Navigate replace to="/admin/login" />;
  
    }


    return (
      <div style={{display:'flex', position:"fixed", width:"100vw", zIndex:"10000", background:"white"}}>
      <DashSideBar />
        <div className={classes.flex_center} style={{width:'100%', height:'100vh'}}>
        <div  className={`${classes.flex_center}`}>
            <div className={classes.row} style={{margin:'2vmax'}}>
            {images && images.map((item,index)=>(
              <img src={images[index].url}
            style={{width:'20vmax'}} key={index}/>
            ))}
            </div>
            <div className={`${classes.row}${classes.flex_column}`}>
                <div className={`${classes.row}${classes.flex_center}`}>
                    <div>name: <input type='text' value={name} placeholder={product.name}
                      onChange={(e)=>{setName(e.target.value)}}
                    /></div>
                    <div>category: <input type='text' value={category} placeholder={product.category}
                      onChange={(e)=>{setCategory(e.target.value)}}
                    /></div>
                    <div>price: <input type='text' value={price} placeholder={product.price}
                      onChange={(e)=>{setPrice(e.target.value)}}
                    /></div>
                </div>
                <div className={`${classes.flex_center}`}>
                  description:
                  <textarea  value={description} placeholder={product.description} 
                    onChange={(e)=>{setDescription(e.target.value)}}
                  />
                </div>
                <button onClick={()=>{putreq()}} >update</button>
            </div>
        </div>
        </div>
  
  
      </div>
    )
}

export default AdminUpdateProduct