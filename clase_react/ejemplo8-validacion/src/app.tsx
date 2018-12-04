import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage, PageB } from './pages';

export class App extends React.Component {

  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginPage} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    );
  }
}