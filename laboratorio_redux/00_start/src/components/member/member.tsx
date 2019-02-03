import * as React from 'react';
import { Link } from 'react-router'
import { MemberEntity } from '../../model/member';

interface Props {
  member: MemberEntity;
  loadMember: (member: string) => any;
}

export class MemberComponent extends React.Component<Props> {

  componentDidMount() {
    this.props.loadMember(this.props.member.login)
  }

  render() {
    const { member } = this.props
    return (
      <>
        <Link to="/" >Volver</Link>
        <h1>{member.name}</h1>
        <h3>{member.company} ({member.location})</h3>
        <img src={member.avatar_url} style={{ maxWidth: '10rem' }} />
        <h3>bio: {member.bio}</h3>
        <h3>blog: {member.blog}</h3>
      </>
    );
  }
}