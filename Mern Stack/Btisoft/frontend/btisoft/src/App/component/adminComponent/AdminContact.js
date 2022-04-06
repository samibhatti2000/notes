import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from '../../redux/reduxAxois/fetchContact';
import DashSideBar from './DashSideBar'
import { Navigate } from 'react-router-dom';
import Cookie from "universal-cookie";
const cookie = new Cookie();


const useStyle = makeStyles((theme)=>({
  flex_center:{
    display:'flex', 
    flexWrap:'wrap',
    // justifyContent:'center',
    // alignItems:'flex-start'
  },
  card:{
    padding:'2vmax',
    margin:'2vmax',
    border: '1px solid black',
    position:'relative'
  },
  deletIcon:{
    color:'red',
  
  }

}));

const AdminContact = () => {

  const alert = useAlert();
  const classes = useStyle();

  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const {allQuries, loading} = contact

  console.log(allQuries.length);

  const [loader, setLoader]=useState(true)


  // useEffect(() => {

  //   fetchContact(dispatch);
  // })

  useEffect(() => {

    fetchContact(dispatch);
    if(!loading){
      setLoader(false)
    }
    

  }, [dispatch, alert])

  let cklog = cookie.get('logged')
  if(cklog != "logged"){

    return <Navigate replace to="/admin/login" />;

  }
 

  return (
    <div style={{display:'flex', position:"absolute", height:"100%", zIndex:"10000", background:"white"}}>
    <DashSideBar />
      <div className={classes.flex_center} style={{}}>
      
      {allQuries && allQuries.map((item,index)=>(
        <div className={classes.card} key={index}>
 
          <Typography>name: {allQuries[index].name}</Typography>
          <Typography>email: {allQuries[index].email}</Typography>
          <Typography>phone: {allQuries[index].phone}</Typography>
          <Typography>massage: {allQuries[index].massage}</Typography>

          <Button variant='primary' onClick={async()=>{
            const req = await axios.delete(`https://btisoft.herokuapp.com/api/v1/delete/contact/${allQuries[index]._id}`)
            if(req.data.success === true){
              fetchContact(dispatch);
              alert.success('contact deleted')
            }
          
          }}
          ><DeleteIcon 
            className={classes.deletIcon}
            sx={{}}
          /></Button>
        </div>
      ))}


      </div>
    </div>
  )
}

export default AdminContact;