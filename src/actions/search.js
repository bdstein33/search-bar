import request from 'axios';
import {actionCreator} from '../util';

export default {
  search: (data) => {
    // return actionCreator('SEARCH_GITHUB', {}, {
    //   request: {
    //     url: 'https://api.github.com/orgs/massdrop/repos',
    //     method: 'get'
    //   }
    // });
    return dispatch => {
      dispatch({type: 'SEARCH', data})
    };
  },

  updateActiveTab: (data) => {
    return dispatch => {
      dispatch({type: 'ADJUST_ACTIVE_TAB', data})
    };
  }
};
