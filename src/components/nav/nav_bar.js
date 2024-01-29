import React, { useState } from "react";
import "./index.scss";
import { Box } from "@mui/material";
import {useMediaQuery} from '@mui/material'
import { Link } from "react-router-dom";
import styled from 'styled-components'


const LinkBtn = styled(Link)`
  color : inherit;
  text-decoration : none;
  
`

function NavBar(prop) {
  const [isMobile, setIsMobile] = useState(prop.mobile);
  const is_Mobile =  useMediaQuery('(max-width:500px)');
  console.log("is Mobile ", prop);

  const styleReponsive = {
    width : is_Mobile ? "70%" : "40%",
    "position": "fixed",
    "left": prop.open ? "0%" : "-100%",
    "top": "0px",
    "transition" : "0.4s"
  }


  return (
    <>
      {isMobile ? (
        <>
          <Box
            item
            sx={{ display: "flex", justifyContent: "center" }}
            className="navLink"
          >
            <Box className="navBox navBox2" sx={styleReponsive}>
              <Box
                className="item"
                sx={{
                  display: "block",
                  marginLeft: "auto !important",
                  marginRight: "auto !important",
                }}
              >
                <Box className="navLogoBar" sx={{ marginTop: "20px" }}>
                  <Box className="Logo">
                    Baksh<Box className="logoDot"></Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className="item"
                sx={{
                  textAlign: "center",
                  margin: "0px !important",
                  padding: "10px 0px !important",
                  width: "100%",
                }}
              >
                Home{" "}
              </Box>
              <Box
                className="item"
                sx={{
                  textAlign: "center",
                  margin: "0px !important",
                  padding: "10px 0px !important",
                  width: "100%",
                }}
              >
                Projects
              </Box>
              <Box
                className="item"
                sx={{
                  textAlign: "center",
                  margin: "0px !important",
                  padding: "10px 0px !important",
                  width: "100%",
                }}
              >
                Services
              </Box>
              <Box
                className="item"
                sx={{
                  textAlign: "center",
                  margin: "0px !important",
                  padding: "10px 0px !important",
                  width: "100%",
                }}
              >
                <LinkBtn to="/about">Contact</LinkBtn>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            item
            sx={{ display: "flex", justifyContent: "center" }}
            className="navLink"
          >
            <Box className="navBox">
              <Box className="item">
                <LinkBtn to="/">Home</LinkBtn>
              </Box>
              <Box className="item">Projects</Box>
              <Box className="item">Services</Box>
              <Box className="item">
                <LinkBtn to="/about">Contact</LinkBtn>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default NavBar;
