import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
import { FaceComponent } from './face';

interface Props {
}

interface State {
  userName: string;
  level: number;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { 
      userName: 'defaultUserName',
      level: 400
    };
  }

  setUsernameState = (event) => {
    this.setState({ userName: event.target.value });
  }


  public render() {
    return (
      <>
        <FaceComponent level={this.state.level} />
        {this.state.level}
        <input 
          type="range"
          min="0"
          max="500"
          value={
            this.state.level
          }
          onChange={(e) => this.setState({level: +e.target.value})}
        />
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent userName={this.state.userName} onChange={this.setUsernameState} />
      </>
    );
  }
}