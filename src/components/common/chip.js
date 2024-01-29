import React from 'react'
import Chip from '@mui/material/Chip';
import '../theme/styles/index.scss'



function ChipComponent({name,bgColor, fontColor}) {
  return (
   
      <Chip label={name} sx={{ backgroundColor: bgColor, color: fontColor, fontWeight : "bold"}} className='chipStyle'/>
   
  );
}




export default ChipComponent