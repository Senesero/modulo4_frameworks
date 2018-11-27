import * as React from 'react';
import { HelloComponent } from './hello';

import { NameEditComponent } from './nameEdit';

interface Props {

}

interface State {
    username: string;
    editingUsername: string;
}

export class App extends React.Component<Props, State> {

    state = { username: 'defaultUsername', editingUsername: 'defaultUsername' };

    constructor(props: Props) {
        super(props);

        setTimeout(() => {
            const newName = 'nuevo nombre';
            this.setState({ username: newName, editingUsername: newName });
        }, 5000);
    }

    setUsername = () => {
        this.setState({ username: this.state.editingUsername });
    }

    updateEditingName = (editingUsername: string) => {
        this.setState({ editingUsername });
    }

    render() {
        return (
            <>
                <HelloComponent username={this.state.username} />
                <NameEditComponent
                    editingUsername={this.state.editingUsername}
                    onEditingUsernameUpdated={this.updateEditingName}
                    onUsernameUpdateRequest={this.setUsername}
                    isDisabled={(!this.state.editingUsername || this.state.editingUsername === this.state.username)} />
            </>
        );
    }
}
