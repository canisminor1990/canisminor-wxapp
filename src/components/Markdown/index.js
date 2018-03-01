import timeFormat from '../../utils/timeFormat';
import Towxml from 'towxml';

const towxml = new Towxml();

const component = {
  properties: {
    showTitle: {
      type: Boolean,
      value: false,
    },
    content: {
      type: Object,
      observer: function(value) {
        const markdown = towxml.toJson(value.body, 'markdown');
        this.setData({
          markdown,
          time: timeFormat(value.filename),
        });
      },
    },
  },
};

Component(component);
