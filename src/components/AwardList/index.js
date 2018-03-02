const component = {
  properties: {
    content: {
      type: Array,
      observer(value) {
        let string = JSON.stringify(value)
          .replace(/\|/g, /\n/)
          .replace(/\//g, '');
        this.setData({ array: JSON.parse(string) });
      },
    },
  },
};

Component(component);
