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

const styles = theme => createStyles({
    card: {
        maxWidth: 400,
        margin: '0 auto',
    }
})

interface State {
    loginInfo: LoginEntity;
    showLoginFailedNotification: boolean;

}

interface Props extends RouteComponentProps, WithStyles<typeof styles> {

}

class LoginPageInner extends React.Component<Props, State> {

    state: State = {
        loginInfo: createEmptyLogin(),
        showLoginFailedNotification: false,
    }

    onLogin = () => {
        if (isValidLogin(this.state.loginInfo)) {
            this.props.history.push('/pageB');
        } else {
            this.setState({ showLoginFailedNotification: true });
        }
    }

    onUpdatedLoginField = (fieldName: string, fieldValue: string) => {
        this.setState({
            loginInfo: {
                ...this.state.loginInfo,
                [fieldName]: fieldValue
            }
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

