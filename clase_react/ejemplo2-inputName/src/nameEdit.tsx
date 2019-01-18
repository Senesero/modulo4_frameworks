import * as React from 'react';

interface Props {
    username: string;
    onChange: (newName: string) => void;
}

const onHandleInputChange = (props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
};

/*function onHandleInputChange(props: Props) {
    return function (e) {
        props.onChange(e.target.value);
    }
}*/

export const NameEditComponent = (props: Props) => {
    /*const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value)
    }*/

    return (
        <>
            <label>Update name: </label>
            <input value={props.username} 
                onChange={onHandleInputChange(props)}/>
        </>
    )
}