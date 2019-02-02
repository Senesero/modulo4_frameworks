import { connect } from 'react-redux';
import { MemberComponent } from './member';
import { State } from '../../reducers'

// import { LoginComponent } from './login';
// import { LoginEntity } from '../../model/login';
// import { updateEditingLogin } from './actions/updateEditingLogin';
// import { loginRequestStartedAction } from './actions/loginRequestStarted';

const mapStateToProps = (state: State) => {
    return {
        member: state.sessionProfileReducer.member
    }
}

const mapDispatchToProps = () => {
    // return {
    // updateLoginInfo: (loginInfo: LoginEntity) => dispatch(updateEditingLogin(loginInfo)),
    // performLogin: (loginInfo: LoginEntity) => dispatch(loginRequestStartedAction(loginInfo))
    // }
}

export const MemberContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberComponent);