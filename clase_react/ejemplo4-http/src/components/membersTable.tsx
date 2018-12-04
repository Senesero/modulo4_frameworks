import * as React from 'react';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/memberAPI';
import { MemberRow } from './memberRow';

interface Props { }

interface State {
    members: MemberEntity[];
}

export class MembersTableComponent extends React.Component<Props, State> {
    state: State = { members: [] };

    componentDidMount() {
        // this.setState({ members: memberAPI.getAllMembers() });
        memberAPI.getAllMembers().then(
            (members) => this.setState({members})
        );
    }

    public render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.members.map((member) =>
                                <MemberRow key={member.id} member={member} />
                            )
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
