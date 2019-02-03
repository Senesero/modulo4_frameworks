import { connect } from 'react-redux';
import { membersRequest } from '../../actions/membersRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';
import { updateMember, updateCurrentPage, updatePerPage, updateLastSearch } from '../../actions/sessionChange';
import { MemberEntity } from '../../model/member';

const mapStateToProps = (state: State) => {
  return {
    members: state.membersReducer,
    organization: state.sessionProfileReducer.organization,
    currentPage: state.sessionProfileReducer.currentPage,
    perPage: state.sessionProfileReducer.perPage,
    totalElements: state.sessionProfileReducer.totalElements,
    lastSearch: state.sessionProfileReducer.lastSearch,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organization, currentPage, perPage) => {
      return dispatch(membersRequest(organization, currentPage, perPage))
    },
    updateMember: (member: MemberEntity) => { return dispatch(updateMember(member)) },
    updateCurrent: (currentPage: number) => { return dispatch(updateCurrentPage(currentPage)) },
    updatePerPage: (perPage: number) => { return dispatch(updatePerPage(perPage)) },
    updateLastSearch: (lastSearch: string) => { return dispatch(updateLastSearch(lastSearch)) },
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);