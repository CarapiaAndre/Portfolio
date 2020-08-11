import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);