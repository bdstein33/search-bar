import React from 'react';
import {autobind} from 'core-decorators';
import classNames from 'classnames';
import {shell} from 'electron'; // TO DO make Link component
import githubIcon from '../../img/github.png';

import * as C from '../shared';


class ResultTab extends React.Component {
  static propTypes = {
    source: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    url: React.PropTypes.string,
    index: React.PropTypes.number,
    isActive: React.PropTypes.bool,
    setActiveTab: React.PropTypes.func
  };

  @autobind
  handleOnClick() {
    shell.openExternal(this.props.url);
  }

  @autobind
  handleMouseOver() {
    this.props.setActiveTab(this.props.index)
  }

  render() {
    const {
      source,
      name,
      type,
      isActive
    } = this.props;

    return (
      <div
        className={classNames('search-result-tab', isActive && 'search-result-tab__active')}
        onClick={this.handleOnClick}
        onMouseOver={this.handleMouseOver}
      >
        <img className='search-result-icon' src={githubIcon}/>
        <div>
          <C.Text fontSize={6} className='search-result-name'>{name}</C.Text>
          <C.Text className='search-result-description'>{type}</C.Text>
        </div>
      </div>
    );
  }
}

export default ResultTab;
