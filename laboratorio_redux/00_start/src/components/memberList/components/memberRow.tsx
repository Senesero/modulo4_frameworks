import * as React from 'react';
import { Link } from 'react-router'
import { MemberEntity } from '../../../model/member';

interface Props {
  member: MemberEntity;
  clickLink: (newMember: MemberEntity) => void
}

export const MemberRowComponent = (props: Props) => {

  return (
    <tr>
      <td>
        <img src={props.member.avatar_url} className="avatar" style={{ maxWidth: '200px' }} />
      </td>
      <td>
        <span>{props.member.id}</span>
      </td>
      <td>
        <span>{props.member.login}</span>
      </td>
      <td>
        <Link to="/member" onClick={() => props.clickLink(props.member)}>Ver Datos</Link>
      </td>
    </tr>
  );
}
