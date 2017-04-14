import React from 'react';
import classNames from 'classnames';
import searchIcon from '../../../img/search.png';

class SearchBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string
  };

  render() {
    const {
      className
    } = this.props;

    return (
      <div className='search-bar-icon'>
        <img className='search-bar-icon' src={searchIcon}/>
      </div>
    );
  }
}

export default SearchBar;
