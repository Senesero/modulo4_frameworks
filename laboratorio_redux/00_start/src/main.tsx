import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { App } from './app';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { MemberContainer } from './components';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
        <Route path="member" component={MemberContainer} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'));
