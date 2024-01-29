import React from "react";
import Navigation from "../nav/index";
import {Box , useMediaQuery} from '@mui/material';


function Layout({ children }) {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const is_Tablet = useMediaQuery("(max-width:800px)");

  var margin_size = isDesktop ? "100px" : "50px";
  var margin_size = is_Tablet ? "20px" : "90px";

  // console.log("thisis maring ", margin_size)
  const style = {
    padding: `0px ${margin_size}`,
    // border : "1px solid green"
  };

  return (
    <>
      {/* header */}

      <Box sx={style}>
        <Navigation />
      </Box>

      {/* body */}
        {children}

      {/* footer */}
      {/* <Box>
            this is footer
      </Box> */}
    </>
  );
}

export default Layout;
