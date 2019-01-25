import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MembersPage, Member } from './components';

export class App extends React.Component {
  public render() {
    return (
      <HashRouter >
        <Switch>
          <Route exact={true} path="/" component={MembersPage} />
          <Route path="/member" component={Member} />
        </Switch>
      </HashRouter>
    );
  }
}