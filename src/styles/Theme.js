import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { gotu, montserrat } from '../assets/fonts';

const primaryHex = "#1de8b5";
const secondaryHex = "#515151";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Gotu',
      'Montserrat',
      'Roboto',
      'Arial']
    .join(','),
    h1: {
      fontFamily: 'Gotu'
    },
    h5: {
      fontFamily: 'Montserrat'
    },
    button: {
      fontFamily: 'Montserrat',
    }
  },
  palette: {
    primary: {
      main: primaryHex
    },
    secondary: {
      main: secondaryHex
    }
  },
  props: {
    MuiAppBar: {
      color: "secondary"
    },
    MuiButton: {
      color: "primary"
    },
    MuiIconButton: {
      "color": "primary"
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [[gotu], [montserrat]]
      }
    },
    MuiAppBar: {
      root: {
        height: '65px'
      }
    },
    MuiButton: {
      root: {
        borderRadius: '50px'
      }
    },
    MuiPaper: {
      root: {
        "backgroundColor": primaryHex
      }
    },
    MuiDrawer: {
      paper: {
        height: '200px',
        width: '200px',
        borderRadius: '0 0 0 300px'
      }
    },
    MuiListItem: {
      root: {
        textAlign: 'center'
      }
    }
  }
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')] : {
    fontSize: '2.5rem'
  }
}


export default theme;