import React from 'react';
import storeConnect from '../addons/storeConnect';



class Index extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default storeConnect(['application'])(Index);
