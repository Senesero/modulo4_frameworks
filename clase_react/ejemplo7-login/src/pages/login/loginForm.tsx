import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginEntity } from '../../model/login';

interface Props {
    onLogin: () => void;
    loginInfo: LoginEntity;
    onUpdateField: (fieldName: string, fieldValuea: any) => void;
}

export const LoginForm = (props: Props) => {
    const { loginInfo, onLogin, onUpdateField } = props;

    const onTextFieldChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateField(fieldName, e.target.value);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            <Button variant="contained" color="primary"
                onClick={onLogin}
            >Login</Button>
        </div>
    )
}
