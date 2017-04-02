import React from 'react';
import * as C from './shared'

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className='app-container'>
        <C.TextInput name='hi'/>
      </div>
    );
  }
}

export default App;
