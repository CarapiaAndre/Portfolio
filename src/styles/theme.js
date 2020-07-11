import { createMuiTheme } from '@material-ui/core/styles';

import { gotu, montserrat } from '../assets/fonts';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Gotu, Montserrat, Arial',
    h1: {
      fontFamily: 'Gotu',
      fontSize: '3rem'
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontSize: '1.5rem'
    },
    button: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      textTransform: 'uppercase'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [[gotu], [montserrat]]
      }
    },
    MuiButton: {
      root: {
        borderRadius: '50px'
      }
    },
    MuiIconButton: {
      root: {
        color: '#000000'
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
  },
  palette: {
    primary: {
      light: '#6dffe7',
      main: '#1de8b5',
      dark: '#00b585',
      contrastText: '#000000'
    },
    secondary: {
      light: '#7d7d7d',
      main: '#515151',
      dark: '#292929',
      contrastText: '#ffffff'
    }
  }
});

export default theme;