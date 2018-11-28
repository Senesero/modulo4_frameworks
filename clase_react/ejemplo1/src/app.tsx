import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
import { ColorPicker } from './colorpicker'
import { Color } from './model/color';
import { ColorDisplayer } from './colordisplayer';

interface Props {

}

interface State {
    username: string;
    editingUsername: string;
    color: Color;
}

export class App extends React.Component<Props, State> {

    state = {
        username: 'defaultUsername',
        editingUsername: 'defaultUsername',
        color: { red: 90, green: 50, blue: 70 },
    };

    setColorState = (color: Color) => {
        this.setState({ color });
    }

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
                <ColorDisplayer color={this.state.color} />
                <span>
                    Color: [
                        red: {this.state.color.red},
                        green: {this.state.color.green},
                        blue: {this.state.color.blue}
                    ]
                </span>
                <br />
                <ColorPicker
                    color={this.state.color}
                    onColorUpdated={this.setColorState} />
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
