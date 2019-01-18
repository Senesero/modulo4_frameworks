import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

interface Props { }

interface State {
    username: string;
}

export class App extends React.Component<Props, State> {
    state = { username: 'defaultUserName' };
    constructor(props: Props) {
        super(props);

        // Simulamos una llamada ajax
        setTimeout(() => {
            this.setState({username: 'nuevo nombre'});
        }, 2000)
        
    }

    setUsername = (newName: string) => {
        this.setState({ username: newName });
    }

    render() {
        return (
            <>
                <HelloComponent username={this.state.username} />
                <NameEditComponent
                    initialUsername={this.state.username}
                    onNameUpdated={this.setUsername} />
            </>
        )
    }
}
