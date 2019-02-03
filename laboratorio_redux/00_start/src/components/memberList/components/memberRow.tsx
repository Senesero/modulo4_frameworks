import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { MemberEntity } from '../../../model/member';
import { Link } from 'react-router'


interface Props {
  member: MemberEntity,
  updateMember: (newMember: MemberEntity) => void
}

const BodyCell = withStyles(theme => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const MemberRow = (props: Props) =>
  <TableRow key={props.member.id} onClick={() => props.updateMember(props.member)}>
    <BodyCell>
      <img src={props.member.avatar_url} style={{ maxWidth: '10rem' }} />
    </BodyCell>
    <BodyCell><span>{props.member.id}</span></BodyCell>
    <BodyCell><span>{props.member.login}</span></BodyCell>
    <BodyCell><Link to="/member" onClick={() => props.updateMember(props.member)}>Ver Datos</Link></BodyCell>
  </TableRow>