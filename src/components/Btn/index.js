const component = {
  properties: {
    openType: {
      type: String,
      value: 'navigate',
    },
    url: String,
    type: {
      type: String,
      value: 'primary',
    },
    icon: {
      type: String,
      value: '',
    },
    full: {
      type: Boolean,
      value: true,
    },
  },
};

Component(component);
