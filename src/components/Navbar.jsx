import {styled , alpha} from '@mui/material/styles';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import {makeStyles} from '@mui/styles'
import classNames from 'classnames';
import {drawerWidth} from './SideBar';

const useStyles = makeStyles((theme)=>({
  appBarMargin:{
    [theme.breakpoints.up('sm')]:{
      // marginLeft:2,
  },
  [theme.breakpoints.up('md')]:{
    marginLeft:drawerWidth+20,
  },
    transition:theme.transitions.create()
  },
  inputStyle:{
    width:'200px',
    background:'#272727',
    height:'30px',
    border:'none',
    color:'white',
    '&:focus':{
      outline:'none',
    }
  }
}))


function Navbar({open , setOpen}) {
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <AppBar color="primary">
      <Toolbar className={classNames({[classes.appBarMargin]:open})} >
        <IconButton color="secondary">
          {!open && <MenuIcon onClick={handleDrawerOpen} />}
        </IconButton>
        <Box >
            <Typography variant="h6">
              Assignment
            </Typography>
        </Box>
        <Box sx={{display:'flex',width:'100%', justifyContent:'space-between' }}>
            <Box sx={{mx:'auto'}}>
              <input placeholder="Search here ..." className={classes.inputStyle} type="text" />
              <Button color="secondary" size='small' >Search</Button>
            </Box>
            <Box>
              <Button variant="contained" size="small" sx={{mr:1}} color="info">Login</Button>
              {/* <Button variant="contained" size="small" color="info">Signup</Button> */}
            </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar