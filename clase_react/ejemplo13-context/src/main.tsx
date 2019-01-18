import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { SessionProvider } from './common';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <SessionProvider>
      <App />
    </SessionProvider>
  </MuiThemeProvider >
  ,
  document.getElementById('root')
);
