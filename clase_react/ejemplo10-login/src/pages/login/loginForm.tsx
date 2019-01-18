import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

interface Props {
    onLogin: () => void;
}

export const LoginForm = (props: Props) =>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '' }}>
        <TextField
            label="Name"
            margin="normal"
        />
        <TextField
            label="Password"
            type="password"
            margin="normal"
        />
        <Button variant="contained" 
            color="primary" 
                onClick={props.onLogin}>Login</Button>
    </div>
