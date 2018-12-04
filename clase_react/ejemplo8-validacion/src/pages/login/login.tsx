import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { LoginForm } from './loginForm';
import { LoginEntity, createEmptyLogin } from '../../model/login';
import { isValidLogin } from '../../api/login';
import { NotificationComponent } from '../../common';
import { LoginFormErrors, createDefaultLoginFormErrors } from './viewmodel';
import { LoginFormValidation } from './login.validation';
import { FieldValidationResult, FormValidationResult } from 'lc-form-validation';


const styles = theme => createStyles({
    card: {
        maxWidth: 400,
        margin: '0 auto',
    }
})

interface State {
    loginInfo: LoginEntity;
    loginFormErrors: LoginFormErrors;
    showLoginFailedNotification: boolean;
}

interface Props extends RouteComponentProps, WithStyles<typeof styles> {

}

class LoginPageInner extends React.Component<Props, State> {

    state: State = {
        loginInfo: createEmptyLogin(),
        loginFormErrors: createDefaultLoginFormErrors(),
        showLoginFailedNotification: false,
    }

    onLogin = () => {
        LoginFormValidation.validateForm(this.state.loginInfo)
            .then((formValidationResult) => {
                if (formValidationResult.succeeded) {
                    if (isValidLogin(this.state.loginInfo)) {
                        this.props.history.push('/pageB');
                    } else {
                        this.setState({ showLoginFailedNotification: true });
                    }
                } else {
                    alert('error, review the fields');

                    const updatedLoginFormError = {
                        ...this.state.loginFormErrors,
                        ...formValidationResult.fieldErrors,
                    }

                    this.setState({
                        loginFormErrors: updatedLoginFormError
                    })
                }
            })
    }

    onUpdatedLoginField = (fieldName: string, fieldValue: string) => {
        this.setState({
            loginInfo: {
                ...this.state.loginInfo,
                [fieldName]: fieldValue
            }
        });

        LoginFormValidation.validateField(this.state.loginInfo, fieldName, fieldValue)
            .then((fieldValidationResult) => {
                this.setState({
                    loginFormErrors: {
                        ...this.state.loginFormErrors,
                        [fieldName]: fieldValidationResult
                    }
                })
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <Card className={classes.card}>
                    <CardHeader title="Login" />
                    <CardContent>
                        <LoginForm
                            onLogin={this.onLogin}
                            onUpdateField={this.onUpdatedLoginField}
                            loginInfo={this.state.loginInfo}
                            loginFormErrors={this.state.loginFormErrors}
                        />
                    </CardContent>
                </Card>
                <NotificationComponent
                    message="Invalid login or password, please tyr again"
                    show={this.state.showLoginFailedNotification}
                    onClose={() => this.setState({ showLoginFailedNotification: false })}
                />
            </>
        );
    };
}

//export const LoginPage = withStyles(styles)(LoginPageInner);
export const LoginPage = withStyles(styles)(withRouter<Props>(LoginPageInner));

