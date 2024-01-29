import React from "react";

import { Typography, useMediaQuery } from "@mui/material";
import { Box, Grid } from "@mui/material";
import "../components/theme/styles/index.scss";
import ChipComponent from "../components/common/chip";
import { SecondaryButton } from "../components/button/primary";
import PrimaryButton from "../components/button/primary";
import InputField from "../components/inputField/Input";
import boyImg from "../assets/boy.png";


function Home() {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const is_Tablet = useMediaQuery("(max-width:800px)");
  const is_Mobile = useMediaQuery("(max-width:500px)");

  var margin_size = isDesktop ? "100px" : "50px";
  var margin_size = is_Tablet ? "20px" : "90px";
  
  // console.log("thisis maring ", margin_size)
  const style = {
    padding: `0px ${margin_size}`,
    // border : "1px solid green"
  };

  
  const styledWithBG = {
    position: "relative",
    backgroundImage: `url(${boyImg})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", // Set background position to center
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };


  const mainHeading = {
    marginTop : isDesktop? "100px" : "40px",
    fontSize : isDesktop? "100px" : (is_Mobile ? "50px" : "80px !important"),
    lineHeight : isDesktop? "100px" : (is_Mobile ? "50px" : "80px !important")
  }


  return (
    <>
      {/* hero section */}
      <Box>
        <Grid container>
          <Grid lg={7} md={7} sm={12} xl={6}>
            <Box sx={style} data-aos="fade-right" data-aos-duration="1000">
              <Box className="main_headline" sx={mainHeading} >
                Hi! I Am
                <ChipComponent
                  name="MERN Stack"
                  bgColor="#5462ff"
                  fontColor="white"
                />
                <br />
                Nabi Bux
              </Box>

              <Box
                className="heading_1"
                sx={{ margin: "30px 0px", fontSize: "18px" }}
              >
                Develping Websites for over <b>2 Years</b>
                <br /> as Full Stack Developer
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box>
                  <SecondaryButton name="Hire Me" />
                </Box>

                <Box sx={{ marginLeft: "20px" }}>
                  <PrimaryButton name="Projects" />
                </Box>
              </Box>

              <Box sx={{ display: "flex", margin: "30px 0px" }}>
                <Box>
                  <Box className="heading_5">Contact</Box>
                  <Box className="typo_style">nabibux0782@gmail.com</Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#262626", padding: "50px 0px" }}>
              {/* ====================================== */}
              <Grid container sx={style}>
                <Grid item lg={6} md={6} sm={6} sx={{width : "50%"}}>
                  <Box>
                    <Box className="heading_3" sx={{ color: "white" }}>
                      Project <br />
                      Satistics 2022
                    </Box>
                    <br />
                    <SecondaryButton name="Know More" isFooterButton={true} />
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    width : "50%"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid gray",
                      padding: "10px 0px",
                     
                    }}
                    className="typo_style"
                  >
                    <Box>Website Design</Box>
                    <Box>19</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid gray",
                      padding: "10px 0px",
            
                    }}
                    className="typo_style"
                  >
                    <Box>Website Development</Box>
                    <Box>15</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid gray",
                      padding: "10px 0px",
                    }}
                    className="typo_style"
                  >
                    <Box>App Development</Box>
                    <Box>10</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* ====================================== */}
            </Box>
          </Grid>
          {isDesktop ? (
            <>
              <Grid lg={5} md={5} sm={12} xl={6} sx={styledWithBG}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "50px",
                  }}
                  
                >
                  <InputField placeholder={"Subscribe my Newsletter"} />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    top: "50px",
                  }}
                >
                  <Box>
                    Create Your Site in <b>React</b> & <b>Node</b>
                    <br /> <b>NextJS</b>
                  </Box>
                </Box>
              </Grid>
            </>
          ) : (
            ""
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
