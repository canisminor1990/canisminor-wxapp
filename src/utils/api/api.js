import request from '../request.js';

const get = (url) => {
  return request(url, {method: 'GET'});
};

export default {
  queryWeather() {
      return get('https://canisminor.cc/api/blog/toc');
  },
};
