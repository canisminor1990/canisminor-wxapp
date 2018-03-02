import request from './request.js';
import { join } from 'path';
const get = url => {
  return request(url, { method: 'GET' });
};

const API = 'https://canisminor.cc/';

export default {
  queryData() {
    return get(API + 'raw-data');
  },
  queryBlogToc() {
    return get(API + join('api', 'blog', 'toc'));
  },
  queryBlogPage(path) {
    return get(API + join('api', 'blog', path));
  },
  queryProjects() {
    return get(API + join('api', 'project', 'toc'));
  },
};
