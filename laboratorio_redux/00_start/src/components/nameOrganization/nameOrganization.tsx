import * as React from 'react';
import TextField from "@material-ui/core/TextField";


interface Props {
  organization: string;
  onChange: (name: string) => void;
}

export const NameOrganizationComponent = (props: Props) => {
  return (
    <div>
      <TextField
        id="standard-bare"
        defaultValue="Bare"
        margin="normal"
        value={props.organization}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
