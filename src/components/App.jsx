import React from 'react';
import * as C from './shared'

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div>
        GIIIII
        <C.Text>
          HELLO
        </C.Text>
      </div>
    );
  }
}

export default App;
