import request from './request.js';

const get = url => {
  return request(url, { method: 'GET' });
};

export default {
  queryData() {
    return get('https://canisminor.cc/raw-data');
  },
  queryBlogToc() {
    return get('https://canisminor.cc/api/blog/toc');
  },
};
