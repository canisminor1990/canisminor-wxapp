import Towxml from 'towxml';
const towxml = new Towxml();

const component = {
  properties: {
    content: {
      type: Object,
      observer: function(value) {
        this.setData({ markdown: towxml.toJson(value.body, 'markdown') });
      },
    },
  },
};

Component(component);
