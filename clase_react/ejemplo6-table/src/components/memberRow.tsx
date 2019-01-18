import * as React from 'react';
import { MemberEntity } from '../model/member';

interface Props {
  member: MemberEntity;
}

export const MemberRow = ({ member }: Props) =>
  <tr>
    <td><img src={member.avatar_url} style={{ width: '100px' }} /></td>
    <td>{member.id}</td>
    <td>{member.login}</td>
  </tr>
