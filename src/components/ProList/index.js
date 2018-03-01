import { join } from 'path';

const component = {
  properties: {
    content: {
      type: Object,
      observer: function(value) {
        const { imgPath, imgPage, video, btn } = value;
        this.setData({
          imgList: buildImgSrc(imgPage, imgPath),
          video: buildVideoSrc(video),
          btn: buildBtn(btn),
        });
      },
    },
    num: {
      type: Number,
      value: 0,
      observer: function(value) {
        const num = value + 1;
        const numTilte = num > 9 ? num : `0${num}`;
        this.setData({ numTilte });
      },
    },
  },
  methods: {
    handleShow: function() {
      this.setData({ show: !this.data.show });
    },
  },
  data: {
    show: false,
    numTilte: '01',
  },
};

function buildBtn(btn) {
  if (btn) {
    return {
      title: btn.title,
      src: btn.src,
    };
  } else return false;
}

function buildVideoSrc(video) {
  if (video) {
    return `http://qn-video.canisminor.cc/${video}`;
  } else return false;
}

function buildImgSrc(imgPage, imgPath) {
  if (imgPath && imgPage) {
    const imgList = [];
    for (let i = 1; i <= imgPage; i++) {
      const imgSrc = `http://${join('qn.canisminor.cc/project/', imgPath, `${imgPath}_${i}.png`)}`;
      imgList.push(imgSrc);
    }
    return imgList;
  } else return false;
}

Component(component);
