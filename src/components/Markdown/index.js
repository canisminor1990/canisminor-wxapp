import WxParse from './wxParse/wxParse';
import marked from 'marked';
import Prism from 'prismjs';
// import bash from 'prismjs/components/prism-bash';
// import sass from 'prismjs/components/prism-sass';
// import json from 'prismjs/components/prism-json';
// import jsx from 'prismjs/components/prism-jsx';
// import md from 'prismjs/components/prism-markdown';
// import yaml from 'prismjs/components/prism-yaml';
//
// const extensions = {
//  bash,
//  js: jsx,
//  scss: sass,
//  sass,
//  json,
//  md,
//  yaml,
//  html: 'markup',
//  ejs: 'markup',
//  svg: 'markup',
//  xml: 'markup',
//  py: 'python',
//  rb: 'ruby',
// };

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code, language) => Prism.highlight(code, Prism.languages[language]),
});

const component = {
  properties: {
    content: {
      type: Object,
      observer: function(value) {
        const that = this;
        WxParse.wxParse('markdown', 'html', marked(value.body), that, 5);
      },
    },
  },
};

Component(component);
