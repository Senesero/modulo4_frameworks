import * as React from 'react';

interface Props {
  organization : string;
  onChange : (name : string) => void;
}

export const NameOrganizationComponent = (props: Props) => {
  return (
    <div>
      <label>Update Name:</label>
      <input
        value={props.organization}
        onChange={(e) => props.onChange(e.target.value)}
        />
    </div>
  );
}
