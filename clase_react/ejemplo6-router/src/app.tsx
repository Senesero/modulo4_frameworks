import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { PageA } from './pageA';
import { PageB } from './pageB';

export class App extends React.Component {

  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={PageA} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    );
  }
}