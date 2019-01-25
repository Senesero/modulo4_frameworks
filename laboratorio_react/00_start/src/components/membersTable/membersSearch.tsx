import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {
    onClick: () => void;
    organization: string;
    setOrganization: (newOrganization: string) => void;
}

const onChange = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setOrganization(e.target.value);
}

export const MembersSearchComponent = (props: Props) =>
    <>
        <TextField
            id="standard-bare"
            defaultValue="Bare"
            margin="normal"
            value={props.organization}
            onChange={onChange(props)}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={props.onClick}
            disabled={!props.organization}>Cargar</Button>

    </>