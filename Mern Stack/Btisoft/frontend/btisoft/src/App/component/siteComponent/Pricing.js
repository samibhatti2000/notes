import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchContact } from "../../redux/reduxAxois/fetchContact";

const useStyle = makeStyles((theme) => ({
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenterColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Pricing = () => {
  const classes = useStyle();
  const alert = useAlert();

  const contact = useSelector((state) => state.contact);
  const {allQuries, loading} = contact

    const dispatch = useDispatch();
    const[name,setName]= useState()
    const[email,setEmail]= useState()
    const[phone,setPhone]= useState()
    const[massage,setMassage]= useState()
    const [loader, setLoader]=useState(true)

   
    
    const postContact = async (data)=>{
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const req = await axios.post('/api/v1/post/contact',data,config).catch((error)=>{
          console.log(error);
        });
      if(req.data.success === true){
        alert.success('massage sent sucessfully')
      }
        // alert.success("your massage sent successfully")
    }

  useEffect(() => {

    fetchContact(dispatch);
    if(!loading){
      setLoader(false)
    }
    

  }, [dispatch, alert]);

    const contactSubmit = (e)=>{
        e.preventDefault();

        const myform = new FormData();
        myform.set('name',name)
        myform.set('email',email)
        myform.set('phone',phone)
        myform.set('massage',massage)
        postContact(myform);
    }
  return (
    <>
      <div
        className={`${classes.gardent01} ${classes.flexCenterColumn}`}
        style={{ maxWidth:"100vw !important", minHeight: "100vh", overflow:'hidden'}}
      >
        <Typography variant="h1" color="white" sx={{marginTop:'8vmax'}}>
          Pricing
        </Typography>
        <hr style={{ width: "40vw" }} />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="" color="initial" sx={{margin:'1vmax'}}>
          <br />
          <br />
          Pricing may vary On your demand of work may lesser may be little more
          <br /> <br />
          Fullstack: Advance app and functionalty: US$ 4000 <br />
          Wordpress: Advance Web: US$ 800 Nodejs Api: all advance feature
          Authentication, autherizotion system: US$ 1000 <br />
          Python Django Api: all advance feature Authentication, autherizotion
          system: US$ 1000 <br />
          Algo trading bots: Custom trading bots with best startegy: US$ 5000{" "}
          <br />
          Block Chian: nft, crypto wallet, mining software, smart Contract: US$
          15000
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
        </Typography>
        <hr style={{ width: "60vw" }} />
        <Typography variant="h2" color="white" sx={{marginTop:'15vmax'}}>
          Get in touch
        </Typography>
        <>
        <form className={classes.flexCenterColumn}
         onSubmit={contactSubmit}
         style={{width:"50vmax", height:"50vmax", opacity:"0.8"}}>
        <input type='text' value={name} placeholder='name' 
        onChange={(e)=>{setName(e.target.value)}}
        style={{padding:'0.6vmax', margin:'0.6vmax'}}/>
        <input type='email' value={email} placeholder='email' 
        onChange={(e)=>{setEmail(e.target.value)}}
        style={{padding:'0.6vmax',margin:'0.6vmax'}}/>
        <input type='tel' value={phone} placeholder='phone'  
        onChange={(e)=>{setPhone(e.target.value)}}
        style={{padding:'0.6vmax',margin:'0.6vmax'}}/>
        <textarea type='textarea' value={massage} placeholder='massage'  
        onChange={(e)=>{setMassage(e.target.value)}}
        style={{padding:'0.6vmax',margin:'1vmax'}}/>
        <Button type='submit' color="secondary"
        sx={{padding:'0.3vmax',margin:'1.2vmax', width:'10vmax', fontSize:'1.5vmax'}}>Submit</Button>

        </form>
        </>

      </div>
    </>
  );
};

export default Pricing;
