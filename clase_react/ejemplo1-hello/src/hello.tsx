import * as React from 'react';

interface Props {
    username: string;
}

export const HelloComponent = (props: Props) =>
    <h1>Hello {props.username}</h1>
