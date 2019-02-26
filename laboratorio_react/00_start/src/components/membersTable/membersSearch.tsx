import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {
    loadMembers: () => void;
    organization: string;
    setOrganization: (newOrganization: string) => void;
    setCurrentPage: (currentPage: number) => void;
}

const onChange = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setOrganization(e.target.value);
}

const onClick = (props: Props) => {
    props.setCurrentPage(1);
    props.loadMembers();
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
            onClick={() => onClick(props)}
            disabled={!props.organization}>Cargar</Button>

    </>