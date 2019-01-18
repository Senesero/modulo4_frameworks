import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { LoginForm } from './loginForm';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { LoginEntity, createEmptyLogin } from '../../model/login';
import { isValidLogin } from '../../api/login';
import { NotificationComponent } from '../../common/notification';
import { LoginFormErrors, createDefaultLoginFormErrors } from './viewmodel';
import { loginFormValidation } from './login.validation';
import { SessionContext } from '../../common/sessionContext';

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
  updateContextLogin: (newLogin: string) => void;
}

class LoginPageInner extends React.Component<Props, State> {

  state: State = {
    loginInfo: createEmptyLogin(),
    loginFormErrors: createDefaultLoginFormErrors(),
    showLoginFailedNotification: false,
  }

  onLogin = () => {
    loginFormValidation.validateForm(this.state.loginInfo)
      .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
          if (isValidLogin(this.state.loginInfo)) {
            this.props.updateContextLogin(this.state.loginInfo.login)
            this.props.history.push('/pageB');
          } else {
            console.log('Login failed')
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

  onUpdateLoginField = (fieldName: string, fieldValue) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [fieldName]: fieldValue
      }
    })

    loginFormValidation.validateField(this.state.loginInfo, fieldName, fieldValue)
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
              loginInfo={this.state.loginInfo}
              onUpdateField={this.onUpdateLoginField}
              loginFormErrors={this.state.loginFormErrors} />
          </CardContent>
        </Card>
        <NotificationComponent
          message="Invalid login or password, please try again"
          show={this.state.showLoginFailedNotification}
          onClose={() => this.setState({ showLoginFailedNotification: false })}
        />
      </>

    );
  };
}

export const LoginPageInner2 = (props) =>
  <SessionContext.Consumer>
    {
      ({ updateLogin }) => <LoginPageInner updateContextLogin={updateLogin} {...props} />
    }
  </SessionContext.Consumer>

export const LoginPage = withStyles(styles)(withRouter<Props>(LoginPageInner2));