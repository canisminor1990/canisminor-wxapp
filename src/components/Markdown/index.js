import timeFormat from '../../utils/timeFormat';
import { wx, handleNav } from '../../utils';
import Towxml from 'towxml';

const towxml = new Towxml();

const component = {
  data: {
    render: false,
  },
  properties: {
    loading: Boolean,
    showTitle: {
      type: Boolean,
      value: false,
    },
    content: {
      type: Object,
      observer(value) {
        if (!this.data.render && !this.data.loading) {
          wx.showNavigationBarLoading();
          try {
            const markdown = towxml.toJson(value.body, 'markdown');
            this.setData({
              markdown,
              time: timeFormat(value.filename),
              render: true,
            });
          } catch (e) {}
          wx.hideNavigationBarLoading();
        }
      },
    },
  },
  methods: {
    handleNav,
    previewImage(e) {
      wx.previewImage({
        current: e.currentTarget.dataset.src,
        urls: [e.currentTarget.dataset.src],
      });
    },
  },
};

Component(component);
