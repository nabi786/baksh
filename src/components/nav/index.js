
import React, { useEffect, useState, useContext } from "react";
import "./index.scss"
import { Box} from "@mui/material";
import PrimaryButton from '../button/primary'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import NavBar from './nav_bar'
import Modal from '../modal/Modal'
import myContext from '../contextAPI/context'


function Navigation() {

  let contextAPI = useContext(myContext)

  const [open,setOpen] = useState(false);
  const [openModal,setOpenModal] = useState(false)

  const isDesktop = useMediaQuery('(min-width:885px)')


  const handleClick = ()=>{
    contextAPI.setContactModal(true)
  }
  

  

// function to handle navbar
  const handlenav = ()=>{
    console.log('we are handling navbar')
    setOpen(true)
  }

  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        className="navBar"
      >

          
        {/* logo Box */}
            <Box className="navLogoBar">
              <Box className="Logo">
                Baksh<Box className="logoDot"></Box>
              </Box>
            </Box>
         

        {isDesktop ? (
          <>
            <NavBar mobile={false}/>
          </>
        ) : (
          ""
        )}

      {isDesktop ? 
        <Box item className="navbtnBar">
          <PrimaryButton name={"Let's Chat"} action={handleClick}/>
          <Modal/>
        </Box>
        : 
        <>
          <NavBar mobile={true} open={open}/>
            {open ? <CloseIcon onClick={()=>setOpen(false)}/> : <MenuIcon onClick={handlenav}/>}
        </>
        }
      </Box>
    </>
  );
}

export default Navigation;
