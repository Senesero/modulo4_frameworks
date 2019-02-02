import * as React from 'react';
import { MemberTableComponent } from './components/memberTable';
import { MemberEntity } from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  organization: string;
  loadMembers: (organization: string) => any;
  clickLink: (newMember: MemberEntity) => void
}

export const MemberAreaComponent = (props: Props) => {
  return (
    <div>
      <input type="submit"
        value="load"
        className="btn btn-default"
        onClick={() => props.loadMembers(props.organization)}
      />
      <br />
      <MemberTableComponent clickLink={props.clickLink} members={props.members} />
    </div>
  );
}
