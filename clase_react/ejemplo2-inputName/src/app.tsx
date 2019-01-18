import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

interface Props { }

interface State {
    username: string;
}

export class App extends React.Component<Props, State> {
    state = { username: 'defaultUserName' };
    /*constructor(props: Props) {
        super(props);
        
        this.state = {username: 'defaultUserName'}

    }*/

    setUsername = (newName: string) => {
        this.setState({ username: newName });
    }

    render() {
        return (
            <>
                <HelloComponent username={this.state.username} />
                <NameEditComponent
                    username={this.state.username}
                    onChange={this.setUsername} />
            </>
        )
    }
}
