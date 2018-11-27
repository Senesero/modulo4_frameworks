import * as React from 'react';

interface Props {
    editingUsername: string;
    onEditingUsernameUpdated: (newName: String) => void;
    onUsernameUpdateRequest: () => void;
}

export class NameEditComponent extends React.Component<Props, {}> {
 
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onEditingUsernameUpdated(e.target.value);
    }

    render() {
        return (
            <>
                <label>Update name: </label>
                <input value={this.props.editingUsername}
                    onChange={this.onChange} />
                <button onClick={this.props.onUsernameUpdateRequest}>Change</button>
            </>
        )
    }
}