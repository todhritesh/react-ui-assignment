import { createTheme } from "@mui/material"

export const primaryColor = '#212121'
export const secondaryColor = '#eeeeee'
// export const primaryColor = '#eeeeee'
// export const secondaryColor = '#212121'
const dividerColor = '#3c3c3c'

export const theme = createTheme({
  palette:{
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  components:{
    MuiDrawer:{
      styleOverrides:{
        paper:{
          height:'100vh',
          backgroundColor:primaryColor,
          color:secondaryColor,
          borderRight:`2px solid ${dividerColor}`
        }
      }
    },
    MuiDivider:{
        styleOverrides:{
            root:{
                borderColor:dividerColor
            }
        }
    }
  }
})