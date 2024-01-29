import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/theme/styles/variable.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Box} from '@mui/material';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box sx={{maxWidth:"1600px",margin:"auto",}}>
      <App />
    </Box>
  </React.StrictMode>
);

reportWebVitals();
