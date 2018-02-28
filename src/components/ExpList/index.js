const component = {
  properties: {
    content: {
      type: Array,
      observer: function(value) {
        let string = JSON.stringify(value)
          .replace(/\|/g, '; ')
          .replace(/#[0-9|A-Z]+/g, m => hexToRgb(m));
        this.setData({ array: JSON.parse(string) });
      },
    },
  },
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgba = [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 0.25];
  return `rgba(${rgba.join(',')})`;
}

Component(component);
