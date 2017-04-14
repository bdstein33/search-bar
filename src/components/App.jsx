import React from 'react';
import storeConnect from './addons/storeConnect';
import {searchActions} from '../actions'
import {remote, shell} from 'electron';
import {autobind} from 'core-decorators';
import * as C from './shared'
import SearchBar from './SearchBar'
const win = remote.getCurrentWindow();


class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    actions: React.PropTypes.object,
    search: React.PropTypes.object
  };

  componentDidMount() {
    document.body.addEventListener('keydown', event => {

      switch (event.key) {
        case 'Escape':
          win.hide();
          break;
        case 'ArrowUp':
          this.props.actions.updateActiveTab({move: -1})
          break;
        case 'ArrowDown':
          this.props.actions.updateActiveTab({move: 1})
          break;
        case 'Enter':
          this.navigateToActiveTab(win);
          break;
        default:
          break;
      }
    });
  }
  closeWindow(e) {
    if (e.target.className.indexOf('app-container') !== -1) {
      win.hide();
    }
  }

  @autobind
  navigateToActiveTab(win) {
    const {activeTab, results} = this.props.search;
    if (results.length > 0) {
      shell.openExternal(results[activeTab].url);
      win.hide();
    }
  }


  render() {
    return (
      <div className='centered-content app-container' onClick={this.closeWindow}>
        <SearchBar/>
      </div>
    );
  }
}

export default storeConnect(['search'], searchActions)(App);