import * as React from 'react';
import { Link } from 'react-router'
import { MemberEntity } from '../../model/member';
/*import { Link } from 'react-router-dom';
import { SessionContext } from '../common/sessionContext';
import { Button } from '@material-ui/core';
import { MemberEntity } from '../../model/member';

export const Member = () =>
  <div>
    <SessionContext.Consumer>
      {
        ({ member }) => (
          <>
            <Link to="/" ><Button variant="contained" color="primary">
              Volver
            </Button></Link>
            <h1>{member.name}</h1>
            <h3>{member.company} ({member.location})</h3>
            <img src={member.avatar_url} style={{ maxWidth: '10rem' }} />
            <h3>bio: {member.bio}</h3>
            <h3>blog: {member.blog}</h3>
          </>
        )
      }
    </SessionContext.Consumer>
  </div>*/

interface Props {
  member: MemberEntity;
}

export const MemberComponent = (props: Props) => {

  return (
    <div>
      <label>Update Name: {props.member.login}</label>
    </div>
  );
}

/*interface Props {
  member: MemberEntity;
}

export const Member = (props: Props) =>
  <>
    <Link to="/">Volver</Link>
    <div>Miembro: {this.props.member.name}</div>
  </>*/