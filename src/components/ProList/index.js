import { wx, handleNav } from '../../utils';
import { join } from 'path';

const component = {
  properties: {
    content: {
      type: Object,
      observer(value) {
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
      observer(value) {
        const num = value + 1;
        const numTilte = num > 9 ? num : `0${num}`;
        this.setData({ numTilte });
      },
    },
  },
  methods: {
    handleNav,
    handleShow() {
      this.setData({ show: !this.data.show });
    },
    previewImage(e) {
      wx.previewImage({
        current: e.currentTarget.dataset.src,
        urls: this.data.imgList,
      });
    },
    previewVideo(e) {
      wx.previewImage({
        current: e.currentTarget.dataset.src,
        urls: [e.currentTarget.dataset.src],
      });
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
