import React from 'react';
import * as C from './shared'
import {remote} from 'electron';


class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  componentDidMount() {
    document.body.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        const win = remote.getCurrentWindow();
        win.hide();
      }
    });
  }
  closeWindow(e) {
    if (e.target.className.indexOf('app-container') !== -1) {
      const win = remote.getCurrentWindow();
      // win.close();
      win.hide();
    }
  }


  render() {
    return (
      <div className='centered-content app-container' onClick={this.closeWindow}>
        <div className='search-container'>
          <C.SearchBar/>
        </div>
      </div>
    );
  }
}

export default App;
