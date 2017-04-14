import _ from 'lodash';

const initialState = {
  results: [],
  github: [
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'github', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'massdrop', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
    {name: 'google', source: 'github', type: 'repo', url: 'https://www.google.com'},
    {name: 'cnn', source: 'github', type: 'repo', url: 'https://www.cnn.com'},
  ],
  activeTab: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      const text = action.data.text.toUpperCase();
      let results = [];

      if (text.length > 0) {
        results = _.filter(state.github, ({name}) => {
          return name.toUpperCase().indexOf(text) !== -1;
        });
      }

      return Object.assign({}, state, {results});
    case 'SEARCH_GITHUB':
      const github = action.data.map(repo => {
        return {
          source: 'github',
          type: 'repo',
          name: repo.name,
          url: repo.html_url
        }
      })

      return Object.assign({}, state, {github});
    case 'ADJUST_ACTIVE_TAB':
      let activeTab = state.activeTab;
      const {move, newIndex} = action.data;
      // up/down keyboard movement represented by move
      // newIndex accounts for mouse hover over
      if (move && state.results.length > 1) {
        activeTab += + action.data.move;
        if (activeTab < 0) activeTab = state.results.length -1;
        else if (activeTab === state.results.length) activeTab = 0;
     } else if (newIndex) {
       activeTab = newIndex;
     }

     return Object.assign({}, state, {activeTab});
    default:
      return state;
  }
};
