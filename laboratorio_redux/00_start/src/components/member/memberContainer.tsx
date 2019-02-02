import { connect } from 'react-redux';
import { MemberComponent } from './member';
import { State } from '../../reducers'
import { memberRequest } from '../../actions/memberRequest';

// import { LoginComponent } from './login';
// import { LoginEntity } from '../../model/login';
// import { updateEditingLogin } from './actions/updateEditingLogin';
// import { loginRequestStartedAction } from './actions/loginRequestStarted';

const mapStateToProps = (state: State) => {
    return {
        member: state.sessionProfileReducer.member
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadMember: (member) => { return dispatch(memberRequest(member)) },
    };
  }

export const MemberContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberComponent);