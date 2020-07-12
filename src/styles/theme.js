import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { gotu, montserrat } from '../assets/fonts';

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
      fontSize: '1rem',
      textTransform: 'uppercase'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [[gotu], [montserrat]],
        html: {
          height: '100%',
          width: '100%'
        },
        body: {
          height: '100%',
          width: '100%'
        }
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

theme = responsiveFontSizes(theme);

export default theme;