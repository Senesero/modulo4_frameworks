import { connect } from 'react-redux';
import { memberRequest } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';
import { updateMember } from '../../actions/sessionChange';
import { MemberEntity } from '../../model/member';

const mapStateToProps = (state: State) => {
  return {
    members: state.memberReducer,
    organization: state.sessionProfileReducer.organization
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organization) => { return dispatch(memberRequest(organization)) },
    clickLink: (member: MemberEntity) => { return dispatch(updateMember(member)) },
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);