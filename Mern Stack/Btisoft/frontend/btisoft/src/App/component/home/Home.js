import { container, Paper, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import apiimg from "../../img/api.jpg";
import codelaptop from "../../img/code-laptop.jpg";
import codesample from "../../img/code-sample.webp";
import cursorp from "../../img/circle-cursor-hover.png";

const useStyle = makeStyles((theme) => ({
  gardent: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(27,0,202,1) 35%, rgba(57,156,184,1) 64%)",
  },
  gardent01: {
    background: "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)"
  },
  sld01: {
    position: "fixed",
    zIndex: "-2",
    // display: 'block'
    // marginBottom:"100vh"
    top: "0vh",
    margin: "0px",
    padding: "0px",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenterSpacebetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homecards: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "1vmax",
    padding: "vmax",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  flexCenterColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  color: {
    color: theme.palette.primary.font,
  },
  bckcolor: {
    backgroundColor: theme.palette.primary.main,
  },
  p: {
    textAlign: "center",
    fontSize: "2vmax !important",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "5vmax",
      padding: "4vmax",
    },
  },
  p1: {
    textAlign: "center",
    fontSize: "2vmax !important",
  },
  hover: {
    "&:hover": {
      // backgroundColor: "red"
    },
  },
}));

const Home = () => {
  const classes = useStyle();
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <div
        className={classes.flexCenterColumn}
        style={{ maxWidth: "100vw !important" }}
      >
        <div
          className={`${classes.flexCenter} ${classes.gardent01} ${classes.sld01} shadow `}
          style={{ width: "100vw", height: "100vh", margin: "0px" }}
        >
          <Typography className={`${classes.color} ${classes.p} `}>
            BTIsoft is a better solution for all web and business software,
            <br /> we are a customer-oriented company,
            <br /> because we belives customers imagination is our work, <br />{" "}
            and that makes us different and precise for customer thinking,
            <br />
            we turn your thinking into reality.
            <br /><br />
            <hr style={{ width: "20vw" }} />
          </Typography>
        </div>

        <div
          className={`${classes.flexCenterColumn} ${classes.bckcolor} ${classes.color}`}
          style={{ zIndex: "10", marginTop: "100vh", width:"100vw" }}
        >
          <div className={`${classes.homecards}`}>
            <div>
              <img src={apiimg} alt="apiimg" width="350px" />
            </div>
            <div>
              <Typography sx={{ padding: "20px", margin: "20px" }}>
                <h4>node.js</h4>
                Backend with node.js can help you to get fast, secure, reliable
                Backend API, with only one langauge we make your complete app,
                for better understanding, javaScript MernStack
              </Typography>
            </div>
          </div>
          <div className={`${classes.homecards}`}>
            {mobile ? (
              <div>
                {" "}
                <div>
                  <img src={codelaptop} alt="codelaptop" width="350px" />
                </div>
                <div>
                  <Typography sx={{ padding: "20px", margin: "20px" }}>
                  <h4>React</h4>
                  we can make react application at next level,
                    best graphic for your website,
                    and make your website user friendly,
                    best API management with react-redux,
                    best admin pannel designs,
                    charjs, rechart, for data reporting in react
                    with custom CSS as well as materials UI
                    and much more
                  </Typography>
                </div>
              </div>
            ) : (
              <div className={`${classes.homecards}`}>
                {" "}
                <div>
                  <Typography sx={{ padding: "20px", margin: "20px" }}>
                  <h4>React</h4>
                  we can make react application at next level,
                    best graphic for your website,
                    and make your website user friendly,
                    best API management with react-redux,
                    best admin pannel designs,
                    charjs, rechart, for data reporting in react
                    with custom CSS as well as materials UI
                    and much more
                  </Typography>
                </div>
                <div>
                  <img src={codelaptop} alt="codelaptop" width="350px" />
                </div>
              </div>
            )}
          </div>
          <div className={`${classes.homecards}`}>
            <div>
              <img src={codesample} alt="codesample" width="350px" />
            </div>
            <div>
              <Typography sx={{ padding: "20px", margin: "20px" }}>
              <h4>Python</h4>
              Python is a widely used language,
              with python, we can make Django web apps, Ai apps, Data Science, Business pc apps,
              algo bots, blockchain, and much more
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.flexCenter} ${classes.gardent01} shadow `}
        style={{
          height: "100%",
          zIndex: "20",
          padding:"20px"

        }}
      >
        <Typography className={`${classes.color} ${classes.p1} `}>
        <br />
            
            <br />
          <h1>BTIsoft | software solutions</h1>     
          <br />
            <hr style={{ width: "40vw" }} />    
          
          btisoft is a software solutions provider for businesses and
          we have highly skilled people in our team,<br />
          we are professional in our work and provide the best quality services,<br />
          and turn thinking into reality,<br />
          making customers happy about the project is our responsibility and work, <br />
          we believe in white paper | so we stay transparent with the customer
          we are best at our work,<br />
          we can get you out of any software issues,<br />
          working with us will be a great experience for you,<br />
          our team will help you any time<br /><br />
          <br /><br />
            <hr style={{ width: "20vw" }} />

          <h2>why Btisoft</h2>
          optimal pricing for small businesses,<br />
          we don't tolerate scammers and promote high skilled freelancers,<br />
          because we believe quality is more than profit,<br />
          Agile is the best thing of us | because we value customers,<br />
          Legal work no breaching,<br />
          project delivery on desired time,<br />
          available to do your dream projects,<br />
          bti software can help you grow your business,<br />
          make your business as good as possible with bti solutions,<br />
          we grab the base of the project and use all required features,<br />
          the features we provide are best and unique,<br />
          you are going to get the best quality services,<br /><br />
          lifetime customer support,<br />


          <br /><br />
            <hr style={{ width: "20vw" }} />
          <h2>BTIsoft services</h2>
          we make software and web app, <br />
          services: React, MongoDB NoSQL, SQL database, node.js, 
          API, Seo, content writing, graphic designing
          langauges: python, javaSript,
          technologies: Mern, Django, Asp.net,


          Btisoft packages
          basic: web app,<br />
          silver: web app, SEO, UI graphic deigning<br />
          gold: pc software, mobile app, web app all that you need in a solutions<br /><br />

          <br /><br />
            <hr style={{ width: "20vw" }} />
          <h2>BTisoft future plans</h2>
          we are going to make our works available for the whole world,<br />
          and become highly competitive in any technologies<br />
          and grow our team for the harder task<br />
          plus we are going to expand our team to new people with different skills,<br />
          because nothing is perfect everything can be better






        </Typography>
      </div>
      <div
        className={`${classes.flexCenter} ${classes.gardent01} shadow `}
        style={{
          height: "100%",
          zIndex: "20",
          padding:"20px"

        }}
      >
        <Typography className={`${classes.color} ${classes.p1} `}>
          <h4>Development</h4>         
          Development is the core to all our activities.<br /> We create and develop our applications making sure that they will succeed in the future.<br /> Thanks to agile process and automation <br />you are able to overview any changes we made to the project.<br /> This option enable us to react on all of your requests quickly
        </Typography>
      </div>
      <div
        className={`${classes.flexCenter} ${classes.gardent01} shadow `}
        style={{
          height: "100%",
          zIndex: "20",
          padding:"20px"
        }}
      >
        <Typography className={`${classes.color} ${classes.p1} `}>
          <h4>Advice</h4>
          All projects start with an idea.
          <br /> We will help to transform that idea into the project's
          <br />
          requirement and strategy.
          <br /> We advise on choosing the correct technology <br />
          stack and an external services
          <br /> as well as set up the timeline of the project.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
