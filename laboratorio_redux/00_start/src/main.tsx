import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { App } from './app';
import { Member } from './components/member/member';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

// const nonTypedWindow : any = window;

// const composeEnhancers = nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  /* preloadedState, */
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
          {/* <Route path="student-list" component={StudentListContainer} />
          <Route path="student-detail" component={StudentDetailContainer} /> */}
        </Route>
        <Route path="member" component={Member} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'));
