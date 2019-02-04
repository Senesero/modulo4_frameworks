import { connect } from 'react-redux';
import { MemberComponent } from './member';
import { State } from '../../reducers'
import { memberRequest } from '../../actions/memberRequest';

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