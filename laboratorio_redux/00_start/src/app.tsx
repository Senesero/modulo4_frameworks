import * as React from 'react';
import { MembersAreaContainer, HelloWorldContainer, NameOrganizationContainer } from './components/index';

export const App = () => {
  return (
    <div>
      <HelloWorldContainer />
      <br />
      <NameOrganizationContainer />
      <MembersAreaContainer />
    </div>
  );
}
