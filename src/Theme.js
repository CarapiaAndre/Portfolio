import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

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
  },
});

let theme = createMuiTheme(colorTheme,{
  palette: {
    text: {
      primary: colorTheme.palette.secondary.dark,
      secondary: '#fff',
    },
  },
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
        color: colorTheme.palette.primary.main,
        '&:hover': {
          color: colorTheme.palette.primary.light
        }
      }
    }
  }
})

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem'
  }
}

export default theme;