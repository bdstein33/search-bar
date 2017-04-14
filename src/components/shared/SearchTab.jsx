import React from 'react';
import classNames from 'classnames';

class SearchTab extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    input: React.PropTypes.string
  };

  render() {
    const {
      children,
      className
    } = this.props;

    return (
      <div className={classNames('right', className)}>
        {children}
      </div>
    );
  }
}

export default SearchTab;
