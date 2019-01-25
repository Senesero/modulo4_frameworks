import * as React from 'react';
import { MemberEntity } from '../../model/member';

import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const HeadCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 14
    },
}))(TableCell);

export const MemberHead = () =>
    <TableHead>
        <TableRow>
            <HeadCell>Avatar</HeadCell>
            <HeadCell>Id</HeadCell>
            <HeadCell>Name</HeadCell>
        </TableRow>
    </TableHead>