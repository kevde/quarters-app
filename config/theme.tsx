import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import localFont from "next/font/local";
import { Barlow } from "next/font/google";

const turnpike = localFont({ src: "../public/fonts/Turnpike.woff" });
const barlow = Barlow({ subsets: ['latin'], style: "normal", weight: "400" });

console.log(turnpike);

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: barlow.style.fontFamily,
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#f46D75",
      contrastText: "#000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#000",
    },
    background: {
      default: "#fa3439",
    },
  },
});
export default theme;
