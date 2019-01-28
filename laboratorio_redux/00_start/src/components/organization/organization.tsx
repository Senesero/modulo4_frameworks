import * as React from 'react';

interface Props {
  organization: string;
}

export const OrganizationComponent = (props: Props) => {
  return (
    <h2>Organization: {props.organization} !</h2>
  );
}
