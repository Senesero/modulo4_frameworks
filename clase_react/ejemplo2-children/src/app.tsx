import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
import { ColorPicker } from './colorpicker';
import { ColorDisplayer } from './colordisplayer';
import { Color } from './model/color';
import { SidebarComponent } from './sidebar';

interface Props {

}

interface State {
    username: string;
    editingUsername: string;
    color: Color;
    isSidebarVisible: boolean;
}

export class App extends React.Component<Props, State> {

    state = {
        username: 'defaultUsername',
        editingUsername: 'defaultUsername',
        color: { red: 90, green: 50, blue: 70 },
        isSidebarVisible: false,
    };

    setColorState = (color: Color) => {
        this.setState({ color });
    }

    toggleSidebarVisibility = () => {
        const isSidebarVisible = !this.state.isSidebarVisible;
        this.setState({ isSidebarVisible });
    }

    constructor(props) {
        super(props);
        setTimeout(() => {
            const newName = 'nuevo nombre';
            this.setState({ username: newName, editingUsername: newName });
        }, 5000)
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
                <SidebarComponent isVisible={this.state.isSidebarVisible} >
                    <ul>
                        <li><a href="https://www.imdb.com/title/tt0816692/">Interstellar</a></li>
                        <li><a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a></li>
                        <li><a href="https://www.imdb.com/title/tt0062622/">2001: a space odyssey</a></li>
                    </ul>
                </SidebarComponent>
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
                <div style={{ float: 'right' }}>
                    <button onClick={this.toggleSidebarVisibility}>Toggle side bar</button>
                </div>
            </>
        );
    }
}
