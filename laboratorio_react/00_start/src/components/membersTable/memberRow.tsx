import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  member: MemberEntity,
  loadMember: (login: string) => void;
}

const BodyCell = withStyles(theme => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const MemberRow = (props : Props) =>
  <TableRow key={props.member.id} onClick={() => props.loadMember(props.member.login)}>
    <BodyCell>
      <img src={props.member.avatar_url} style={{ maxWidth: '10rem' }} />
    </BodyCell>
    <BodyCell><span>{props.member.id}</span></BodyCell>
    <BodyCell><span>{props.member.login}</span></BodyCell>
  </TableRow>