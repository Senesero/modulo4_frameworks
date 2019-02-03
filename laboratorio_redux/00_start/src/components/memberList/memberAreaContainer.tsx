import { connect } from 'react-redux';
import { membersRequest } from '../../actions/membersRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';
import { updateMember, updateCurrentPage, updatePerPage } from '../../actions/sessionChange';
import { MemberEntity } from '../../model/member';

const mapStateToProps = (state: State) => {
  return {
    members: state.membersReducer,
    organization: state.sessionProfileReducer.organization,
    currentPage: state.sessionProfileReducer.currentPage,
    perPage: state.sessionProfileReducer.perPage,
    totalElements: state.sessionProfileReducer.totalElements,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organization, currentPage, perPage) => {
      return dispatch(membersRequest(organization, currentPage, perPage))
    },
    clickLink: (member: MemberEntity) => { return dispatch(updateMember(member)) },
    updateCurrent: (currentPage: number) => { return dispatch(updateCurrentPage(currentPage)) },
    updatePerPage: (perPage: number) => { return dispatch(updatePerPage(perPage)) },
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);