const component = {
  data: {
    typing: '',
  },
  properties: {
    title: {
      type: String,
      value: 'title',
    },
    desc: {
      type: String,
      value: 'desc',
      observer(str) {
        let i = 0;
        const that = this;
        function typist() {
          let Typing = that.data.typing;
          if (i <= str.length) {
            Typing = str.slice(0, i++);
            setTimeout(typist, 50); // 递归调用
          }
          that.setData({ typing: Typing });
        }
        typist();
      },
    },
  },
};

Component(component);
