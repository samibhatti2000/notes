import { makeStyles } from '@mui/styles';
import DashSideBar from './DashSideBar'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminProduct from './AdminProduct';
import { useSelector } from 'react-redux';
import Cookie from "universal-cookie";
const cookie = new Cookie();




const useStyle = makeStyles((theme)=>({
  paper:{
    width:'20vw',
    backgroundColor: theme.palette.primary.main,
    // justifyContent:'center',
    alignItems:'flex-start',
    textAlign:'left',
    paddingTop:'4vmax',
    padding:'2vmax'

  },
  bckPrimary:{
    backgroundColor: theme.palette.primary.main,
  },

}));



const Dashboard = () => {
  const classes = useStyle();
  
  let cklog = cookie.get('logged')
  if(cklog != "logged"){

    return <Navigate replace to="/admin/login" />;

  }
 

  return (
    <>
    <div style={{display:'flex', position:"fixed", width:"100vw", zIndex:"10000", background:"white"}}>
    <DashSideBar />
      <div>
        btisoft
      </div>
    </div>
    </>
  )
}

export default Dashboard;