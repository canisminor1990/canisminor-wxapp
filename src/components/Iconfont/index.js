const component = {
  properties: {
    type: {
      type: String,
      value: 'point',
      observer: function(value) {
        this.setData({ classname: `iconfont cm-iconfont icon-${value}` });
      },
    },
    widthFix: {
      type: Boolean,
      value: false,
    },
    color: {
      type: String,
      value: '#333',
    },
    size: {
      type: String,
      value: '1rem',
    },
  },
};
Component(component);
