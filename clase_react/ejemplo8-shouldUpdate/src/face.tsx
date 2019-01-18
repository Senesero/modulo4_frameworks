import * as React from 'react';

interface Props {
    level: number;
}

const setSatisfactionClass = (level: number) => {
    if (level < 100) {
        return "very-dissatisfied"
    }

    if (level < 200) {
        return "somewhat-dissatisfied"
    }

    if (level < 300) {
        return "neither"
    }

    if (level < 400) {
        return "somewhat-satisfied"
    }

    return "very-satisfied"
}

const isRangeChange = (oldValue: number, newValue: number) => {
    const oldValueClass = setSatisfactionClass(oldValue);
    const newValueClass = setSatisfactionClass(newValue);

    return oldValueClass !== newValueClass;
}


export class FaceComponent extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Props, nextState) {
        return isRangeChange(this.props.level, nextProps.level);
    }

    render() {
        console.log(this.props.level);
        return (
            <div className={setSatisfactionClass(this.props.level)}></div>
        )
    }
}