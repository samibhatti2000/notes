import React from 'react'
import { Navigate } from 'react-router-dom';
import DashSideBar from './DashSideBar'
import Cookie from "universal-cookie";
const cookie = new Cookie();

const AppHeaderlinks = () => {

  let cklog = cookie.get('logged')
  if(cklog != "logged"){

    return <Navigate replace to="/admin/login" />;

  }


  return (
    <div style={{display:'flex', position:"fixed", width:"100vw", zIndex:"10000", background:"white"}}>
    <DashSideBar />
      <div>
      AppHeaderlinks
      </div>


    </div>
  )
}

export default AppHeaderlinks