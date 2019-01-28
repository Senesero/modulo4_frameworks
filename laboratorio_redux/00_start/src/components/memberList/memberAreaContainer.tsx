import { connect } from 'react-redux';
import { memberRequest } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => {
  return {
    members: state.memberReducer,
    organization: state.organizationProfileReducer.organization
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organization) => { 
      return dispatch(memberRequest(organization)) 
    }
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
