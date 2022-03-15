import {  ThemeProvider} from '@mui/material'
import React from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import {theme} from './components/style'


function Layout() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <MainContent open={open} />
    </ThemeProvider>
  )
}

export default Layout