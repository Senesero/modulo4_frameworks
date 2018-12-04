import * as React from 'react';

const className = require('./sidebar.css');

interface Props {
    isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
    width: (props.isVisible) ? '23rem' : '0rem',
})

export const SidebarComponent: React.StatelessComponent<Props> = (props) =>

    <div id="mySidenav"
        className={className.sidenav}
        style={divStyle(props)} >
        {props.children}
    </div>