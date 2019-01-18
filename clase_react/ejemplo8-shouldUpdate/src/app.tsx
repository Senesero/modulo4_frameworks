import * as React from 'react';
import { FaceComponent } from './face';

interface Props {
}

interface State {
  level: number;
}

export class App extends React.Component<Props, State> {

  state = { level: 400 }

  public render() {
    const setLevel = (level: number) =>
      this.setState({ level })


    return (
      <>
        <FaceComponent level={this.state.level} />
        <input
          type="range"
          min="0"
          max="500"
          value={this.state.level}
          onChange={
            (e) => setLevel(Number(e.target.value))}
        />
      </>
    );
  }
}