import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import localFont from '@next/font/local';

const turnpike = localFont({ src: '../public/fonts/Turnpike.woff' })

console.log(turnpike)

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: turnpike.style.fontFamily,
    fontSize: 10
  },
  palette: {
    primary: {
      main: "#f46D75",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#fffef2",
    },
    background: {
      default: red.A700,
    },
  },
});
export default theme;
