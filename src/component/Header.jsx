import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
function Header() {
  

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
      sx={{backgroundColor:"#f6a602" ,fontSize:"40px"}}
 
      
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
       
        <Tab sx={{backgroundColor:"#f6a602" ,fontSize:"20px",textDecoration:"none"}} label="My Shop" />
        <Tab sx={{backgroundColor:"#f6a602" ,fontSize:"20px"}} label="Men" />
        <Tab sx={{backgroundColor:"#f6a602" ,fontSize:"20px"}} label="Women" />
        <Tab sx={{backgroundColor:"#f6a602" ,fontSize:"20px"}} label="Electronics" />
      </Tabs>
    </Box>
  );
}


export default Header