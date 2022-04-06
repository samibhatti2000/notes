import { createTheme} from "@mui/material";


const color={
  dark: "#1e1926 !important",
  fonColor:"#ffffff"
  // fonColor:"red"
}

const theme = createTheme({
   palette: {
     primary: {
       main: color.dark,
       font: color.fonColor
     },
     secondary: {
       main: "#ffa500"
     }
   }
 });
 
 export default theme;