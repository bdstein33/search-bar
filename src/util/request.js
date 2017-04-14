import axios from 'axios';

export default (endpoint, data = {}) => {
  const requestObj = {
    method: endpoint.method,
    url: endpoint.url
  };

  if (endpoint.headers) {
    requestObj.headers = endpoint.headers;
  }

  if (endpoint.method.toLowerCase() === 'get') {
    requestObj.params = data;
  } else {
    requestObj.data = data;
  }

  console.log('requestObj', requestObj)

  return axios(requestObj)
    .then(result => {
      return result.data;
    })
    .catch(e => {
      console.log('REQUEST ERROR', e);
      return {};
    });
};
