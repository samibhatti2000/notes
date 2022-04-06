import { Button, Drawer, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import { Adminlink } from './AdminLink';
import React from 'react'
import axios from 'axios';
import { useAlert } from 'react-alert';

import Cookie from "universal-cookie";
const cookie = new Cookie();

const useStyle = makeStyles((theme)=>({
  paper:{
    width:'20vw',
    backgroundColor: theme.palette.primary.main,
    alignItems:'flex-start',
    textAlign:'left',
    paddingTop:'4vmax',
    padding:'2vmax',
    marginRight:'10vmax'

  },
  bckPrimary:{
    backgroundColor: theme.palette.primary.main,
  },
  dashlinkbtn:{

  },
  dashlink:{
    color:'white'

  },

}));




const data = Adminlink;


const DashSideBar = () => {
  const alert = useAlert();

  const logout = async ()=>{
    const req = await axios.get('https://btisoft.herokuapp.com/api/v1/logout').then(
      alert.success('logout succesful')
    ).catch((error)=>{
      console.error('myCode',error);
    })
    let  host = window.location.protocol.concat("//").concat(window.location.host);
    let x = cookie.remove('logged');
    cookie.remove('logged', {path: "/"});
    cookie.remove('token',  {path: "/", domain: `${host}`});
    console.log(x);
    if(req.data.success === true){
      cookie.remove('logged', {path: "/"});
      cookie.remove('token',  {path: "/", domain: `${host}`});
      window.alert('logout sucessfull')
    }
    window.location.reload();
  }

  const classes = useStyle();
  return (
    <div 
    style={{display:'flex', height:"100vh",}}>
    <Drawer
    variant='permanent'
    anchor='left'
    color='primary'
    sx={{
      width:"20vw",
      marginRight:'10vmax',
    }}
    classes={{paper: classes.paper}}
    >
    <h2 style={{color:'white'}}>DASHBOARD</h2>

      {data.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={data[index].to}
              className={classes.dashlinkbtn}
              color="primary"
            >
              <Typography className={classes.dashlink}>
                {data[index].name}
              </Typography>
            </Button>
          ))}
          <Button color='secondary'onClick={()=>{logout()}}>Logout</Button>

    </Drawer>
    
    </div>
  )
}

export default DashSideBar;