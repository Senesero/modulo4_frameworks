import * as React from 'react';

interface Props {
    initialUsername: string;
    onNameUpdated: (newName: string) => void;
}

interface State {
    initialUsername: string;
    editingName: string;
}

export class NameEditComponent extends React.Component<Props, State> {
    state = { editingName: this.props.initialUsername, initialUsername: this.props.initialUsername };

    static getDerivedStateFromProps(nextProps: Props, prevState: State) : Partial<State> {
        if(nextProps.initialUsername && nextProps.initialUsername != prevState.initialUsername) {
            return { editingName: nextProps.initialUsername}
        } else {
            return null;
        }
    }

    onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ editingName: e.target.value })
    };

    onNameSubmit = (e) => {
        this.props.onNameUpdated(this.state.editingName);
    }

    render() {
        return (
            <>
                <label>Update name: </label>
                <input value={this.state.editingName}
                    onChange={this.onHandleInputChange} />
                <button onClick={this.onNameSubmit}>Change</button>
            </>
        )
    }
}