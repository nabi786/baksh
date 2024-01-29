import React, {useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import myContext from '../contextAPI/context'
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
        onClose={()=>{contextAPI.setContactModal(false)}}
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
           <form>

              <TextField label="name"/>
              <TextField label="email"/>
              <TextField label="message"/>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}