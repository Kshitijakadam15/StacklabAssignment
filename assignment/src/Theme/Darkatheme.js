import gif from '../Assets/fb_cover.svg'
const { createTheme } = require("@mui/material");


export const darkTheme =createTheme({  
    palette:{
        mode:"dark",
        primary:{
            main:"#6474E5"
        },
        secondary:{
            main:"#CED4FF"
        },
        black:{
            main:"#061244"
        },
        background:{
            main:"#808080",
            default:"#76839B",
            paper:"#808080"
        },
        textColor:{
            main:"#76839B"
        }
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            body {
              background-image: url(${JSON.stringify(gif)});
              background-size: cover;
              background-repeat: no-repeat;
              background-attachment: fixed;
            }
          `,
        },
      }, 
})