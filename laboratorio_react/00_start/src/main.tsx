import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { SessionProvider } from './common/sessionContext';

ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById('root')
);
