import { Box } from '@mui/system'
import React from 'react'
import {makeStyles, useTheme} from '@mui/styles';
import { primaryColor } from './style';
import {drawerWidth} from './SideBar';
import classNames from 'classnames';
import CardContainer from './CardContainer';
import { Toolbar } from '@mui/material';


const useStyles = makeStyles((theme)=>{
    return {
    
    boxStyling:{
        background:primaryColor,
        height:'auto',
        minHeight:'100vh',
        width:'100wh',
        color:theme.palette.secondary.main,
        transition:theme.transitions.create(),
        paddingLeft:20,
        paddingTop:10

    },
    boxLeftPadding:{
        [theme.breakpoints.up('sm')]:{
            paddingLeft:5,
        },
        [theme.breakpoints.up('md')]:{
            paddingLeft:drawerWidth+20,
        },
        transition:theme.transitions.create()
    }
}
})

function MainContent({open}) {
    const theme = useTheme()

    const classes = useStyles()
  return (
    <Box className={classNames({[classes.boxStyling]:true,[classes.boxLeftPadding]:open})} >
        <Toolbar/>
        <CardContainer/>
    </Box>
  )
}

export default MainContent