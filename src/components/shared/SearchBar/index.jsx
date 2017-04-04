import React from 'react';
import classNames from 'classnames';

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
      <div className='search-bar'>
        <input
          type='text'
          name='search-bar'
          id='search-bar-input'
          className='search-bar-input'
          style={{fontSize: 24}}
          autofocus={true}
        />
      </div>
    );
  }
}

export default SearchBar;
