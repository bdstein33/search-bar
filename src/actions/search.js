import request from 'axios';
import {actionCreator} from '../util';

export default {
  search: (data) => {
    return actionCreator('SEARCH_GITHUB', {}, {
      request: {
        url: 'https://api.github.com/orgs/massdrop/repos',
        method: 'get',
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      }
    });
  }
};
