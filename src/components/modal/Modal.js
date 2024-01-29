import React, { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import myContext from '../contextAPI/context'
import { TextField } from '@mui/material';
import PrimaryButton from '../button/primary'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius : "10px"
};

export default function TransitionsModal() {

  let contextAPI = useContext(myContext)

  console.log('this is context ', contextAPI)

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={contextAPI.contactModal}
        onClose={() => { contextAPI.setContactModal(false) }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={contextAPI.contactModal}>
          <Box sx={style}>
            <Typography sx={
              {
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "25px"
              }
            }>
              Contact
            </Typography>
            <form style={
              {
                margin: "10px 0px 0px 0px"
              }
            }>
              <TextField fullWidth form label="name" sx={{marginTop : "10px"}}/>
              <TextField fullWidth label="email" sx={{marginTop : "10px"}} />
              <TextField multiline rows={4} fullWidth label="message" sx={{marginTop : "10px"}} />

             

              <Box sx={{marginTop : "10px"}}>
                <PrimaryButton name="Submit"  />
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}