import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { MemberListPage } from './page';
import { MemberEntity } from './viewModel';
// import { fetchMemberList } from '../../api';
import { fetchMemberListRequestStart } from '../../actions';
import { mapMemberListFromModelToVm } from './mapper';

const mapStateToProps = (state: State) => ({
  memberList: mapMemberListFromModelToVm(state.memberListReducer.memberList),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberList: () => { dispatch(fetchMemberListRequestStart()) }
});

export const MemberListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberListPage);


/*interface State {
  memberList: MemberEntity[];
}

export class MemberListContainer extends React.Component<{}, State> {

  state = { memberList: [] };

  fetchMembers = () => {
    fetchMemberList().then((memberList) => {
      this.setState({
        memberList: mapMemberListFromMdelToVm(memberList)
      })
    })
  }


  render() {
    return (
      <MemberListPage
        memberList={this.state.memberList}
        fetchMemberList={this.fetchMembers}
      />
    );
  }
}*/
