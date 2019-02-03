import * as React from 'react';
import { MemberEntity } from '../../../model/member';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { MemberHead } from './memberHead';
import { MemberRow } from './memberRow';


interface Props {
  members: MemberEntity[];
  updateMember: (newMember: MemberEntity) => void
}

export const MemberTableComponent = (props: Props) => {
  return (
    <Paper>
      <Table>
        <MemberHead />
        <TableBody>
          {props.members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} updateMember={props.updateMember} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
