import React from 'react';
import {debounce, autobind} from 'core-decorators'
import classNames from 'classnames';
import storeConnect from '../addons/storeConnect';
import {searchActions} from '../../actions'

import searchIcon from '../../img/search.png';
import ResultTab from './ResultTab';

class SearchBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    actions: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };
  }


  // @debounce(500)
  @autobind
  handleInputChange(e) {
    this.props.actions.search({text: e.target.value});
  }

  @autobind
  setActiveTab(newIndex) {
    this.props.actions.updateActiveTab({newIndex})
  }

  render() {
    const {
      className
    } = this.props;
    const results = this.props.search.results;

    return (
      <div className='search-container'>
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
        <div className='search-results-container'>
          {results.map((result, i) => (
            <ResultTab
              source={result.source}
              type={result.type}
              name={result.name}
              url={result.url}
              index={i}
              isActive={this.props.search.activeTab === i}
              setActiveTab={this.setActiveTab}
              key={`${i}-${result.url}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default storeConnect(['search'], searchActions)(SearchBar);

