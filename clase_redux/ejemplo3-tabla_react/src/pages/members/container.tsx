import * as React from 'react';
import { MemberListPage } from './page';
import { MemberEntity } from './viewModel';
import { fetchMemberList } from '../../api';
import { mapMemberListFromMdelToVm } from './mapper';

interface State {
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
}
