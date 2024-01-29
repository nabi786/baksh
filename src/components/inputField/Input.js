import React from 'react'
import {Box} from '@mui/material' 
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './index.scss'

function InputField({placeholder}){


    return(
        <>
           <Box className="BoxStyle">
                <input placeholder={placeholder} className='inputStyle'/>
                <ArrowRightAltIcon className='arrowStyle'/>
           </Box>
        </>
    )
}



export default InputField;