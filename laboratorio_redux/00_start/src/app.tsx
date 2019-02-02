import * as React from 'react';
import { MembersAreaContainer, OrganizationContainer, NameOrganizationContainer } from './components';

export const App = () => {
  return (
    <div>
      <OrganizationContainer />
      <br />
      <NameOrganizationContainer />
      <MembersAreaContainer/>
    </div>
  );
}
