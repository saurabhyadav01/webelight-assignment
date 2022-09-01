import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Header() {
 

  function handelChange(e)
  {

  }
  return (
   <>
    <Box sx={{ width: '100%',margin:"auto" }}>
      <Tabs
       sx={{backgroundColor:"rgb(77,166,255)" ,fontSize:"40px"}}
        value={1}
        onChange={handelChange}
      >
        
        <Tab sx={{ fontSize:"16px",textDecoration:"none"}}  label="My Shop" />
        <Tab sx={{fontSize:"16px"}} label="Men" />
        <Tab sx={{fontSize:"16px"}} label="Women" />
        <Tab sx={{fontSize:"16px"}} label="Electronics" />
      </Tabs>
    </Box>


</>
  );
}


export default Header