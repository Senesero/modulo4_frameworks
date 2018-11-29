import * as React from 'react';
import { MemberEntity } from '../model/member';

interface Props {
  member: MemberEntity;
}

export const MemberRow = (props: Props) =>
  <tr>
    <td><img src={props.member.avatar_url} style={{ width: '100px' }} /></td>
    <td>{props.member.id}</td>
    <td>{props.member.login}</td>
  </tr>
