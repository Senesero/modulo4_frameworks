import * as React from 'react';
import { Color } from './model/color';

interface Props {
    value: number;
    onValueUpdated: (newValue: number) => void;
}

export const ColorSliderComponent = (props: Props) =>
    <>
        {props.value}
        <input type="range"
            min="0"
            max="255"
            value={props.value}
            onChange={(e) => props.onValueUpdated(Number(e.target.value))}
        />        
    </>