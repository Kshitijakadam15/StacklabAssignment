
const { createTheme } = require("@mui/material");


export const lightTheme =createTheme({  
    palette:{
        mode:"dark",
        primary:{
            main:"#FFFFFF"
        },
        secondary:{
            main:"#FFFFFF"
        },
        black:{
            main:"#FFFFFF"
        },
        background:{
            main:"#FFFFFF",
            default:"#FFFFFF",
            paper:"#FFFFFF"
        },
        textColor:{
            main:"#FFFFFF"
        }
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            body {
              background-image:none;
            }
          `,
        },
      }, 
})