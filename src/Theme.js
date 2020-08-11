import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { montserrat, redRose } from './assets/fonts/Fonts' ;

const primaryHex = "#1de8b5";
const secondaryHex = "#515151";

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryHex,
    },
    secondary: {
      main: secondaryHex,
    },
    text: {
      secondary: '#fff'
    }
  },
});

let theme = createMuiTheme(colorTheme,{
  typography: {
    body1: {
      fontFamily: 'Montserrat'
    },
    h1: {
      fontFamily: 'Red Rose',
    },
    h3: {
      fontFamily: 'Red Rose',
    },
    h4: {
      fontFamily: 'Red Rose',
    },
    h5: {
      fontFamily: 'Montserrat',
    },
    h6: {
      fontFamily: 'Montserrat',
    },
    button: {
      fontFamily: 'Montserrat',
    },
    overline: {
      fontFamily: 'Montserrat',
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px'
      },
      containedSecondary: {
        color: primaryHex,
        '&:hover': {
          color: colorTheme.palette.primary.light
        }
      }
    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;