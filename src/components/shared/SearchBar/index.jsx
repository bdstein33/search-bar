import React from 'react';
import {debounce, autobind} from 'core-decorators'
import classNames from 'classnames';
import storeConnect from '../../addons/storeConnect';
import {searchActions} from '../../../actions'

import searchIcon from '../../../img/search.png';

class SearchBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    actions: React.PropTypes.object
  };

  // @debounce(500)
  @autobind
  handleInputChange(e) {
    this.props.actions.search({text: e.target.value});
  }

  render() {
    const {
      className
    } = this.props;

    return (
      <div className='search-bar'>
        <img className='search-bar-icon' src={searchIcon}/>
        <input
          type='text'
          name='search-bar'
          key='search-bar-input'
          id='search-bar-input'
          className='search-bar-input'
          autoFocus={true}
          onChange={this.handleInputChange.bind(this)}
        >
        </input>
      </div>
    );
  }
}

export default storeConnect(null, searchActions)(SearchBar);

