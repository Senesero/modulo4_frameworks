import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { LoginEntity } from '../../model/login';

interface Props {
    onLogin: () => void;
    loginInfo: LoginEntity;
    onUpdateField: (fieldName: string, fieldValue: any) => void;
}

export const LoginForm = (props: Props) => {

    const { loginInfo, onLogin, onUpdateField } = props;

    const onTextFieldChange = (FieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateField(FieldName, e.target.value);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '' }}>
            <TextField
                label="Name"
                margin="normal"
                value={loginInfo.login}
                onChange={onTextFieldChange('login')}
            />
            <TextField
                label="Password"
                type="password"
                margin="normal"
                value={loginInfo.password}
                onChange={onTextFieldChange('password')}
            />
            <Button variant="contained"
                color="primary"
                onClick={onLogin}>Login</Button>
        </div>
    )
}
