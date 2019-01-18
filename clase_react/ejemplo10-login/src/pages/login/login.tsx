import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { LoginForm } from './loginForm';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const styles = theme => createStyles({
  card: {
    maxWidth: 400,
    margin: '0 auto',
  }
})

interface Props extends RouteComponentProps, WithStyles<typeof styles> {

}


const LoginPageInner = (props: Props) => {
  const { classes } = props;

  const onLogin = () => {
    props.history.push('/pageB');
  }

  return (
    <Card className={classes.card}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <LoginForm onLogin={onLogin} />
      </CardContent>
    </Card>
  )
}

export const LoginPage = withStyles(styles)(withRouter<Props>(LoginPageInner));