import * as React from 'react';
import { MemberEntity } from '../model/member';

export interface SessionContextProps {
    member: MemberEntity;
    organization: string;
    updateMemberInfo: (member: MemberEntity) => void;
    setOrganization: (organization: string) => void;
}

const createDefaultUser = (): SessionContextProps => ({
    member: {},
    organization: 'lemoncode',
    updateMemberInfo: (member: MemberEntity) => { },
    setOrganization: (organization: string) => { },
})

export const SessionContext = React.createContext<SessionContextProps>(createDefaultUser());

interface State extends SessionContextProps {

}

export class SessionProvider extends React.Component<{}, State>{

    constructor(props) {
        super(props);

        this.state = {
            member: createDefaultUser().member,
            updateMemberInfo: this.memberInfo,
            organization: createDefaultUser().organization,
            setOrganization: this.setOrganization
        }
    }

    memberInfo = (member: MemberEntity) => {
        this.setState({ member });
    }

    setOrganization = (organization: string) => {
        this.setState({ organization })
    }

    render() {
        return (
            <SessionContext.Provider value={this.state}>
                {this.props.children}
            </SessionContext.Provider>
        )
    }
}