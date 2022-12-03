import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Turnpike",
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
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Turnpike';
        font-style: normal;
        font-weight: 400;
        src: local('Turnpike'), url(https://fonts.cdnfonts.com/s/4409/Turnpike.woff) format('woff');
      }
      `,
    },
  },
});
export default theme;
