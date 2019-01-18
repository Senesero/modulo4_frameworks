import * as React from 'react';
import { SidebarComponent } from './sidebar';

interface Props {

}

interface State {
    isSidebarVisible: boolean;
}

export class App extends React.Component<Props, State> {

    state = {
        isSidebarVisible: false,
    };

    toggleSidebarVisibility = () => {
        const isSidebarVisible = !this.state.isSidebarVisible;
        this.setState({ isSidebarVisible });
    }

    render() {
        return (
            <>
                <SidebarComponent isVisible={this.state.isSidebarVisible} >
                    SideBar
                </SidebarComponent>
                <div style={{ float: 'right' }}>
                    <button onClick={this.toggleSidebarVisibility}>Toggle side bar</button>
                </div>
            </>
        );
    }
}
