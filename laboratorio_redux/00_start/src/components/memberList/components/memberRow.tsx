import * as React from 'react';
import { MemberEntity } from '../../../model/member';
import { Link } from 'react-router'

interface Props {
  member: MemberEntity;
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
        <Link to="/member">Ver Datos</Link>
      </td>
    </tr>
  );
}
