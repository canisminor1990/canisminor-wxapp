import { wx, connect, handleNav, handleShare } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'CanisMinor' });
    this.splash();
  },
  onShareAppMessage: () => handleShare('Intro'),

  data: {
    title: {
      title: 'CanisMinor',
      desc: 'UI / UX Designer & FE Developer',
    },
    splash: 'The collection of curriculum vitae \nand recent projects',
    typing: '',
    splashDone: false,
    showView: true,
    showId: 0,
  },
  splash() {
    const str = this.data.splash;
    let i = 0;
    const that = this;
    function typist() {
      let Typing = that.data.typing;
      if (i <= str.length) {
        Typing = str.slice(0, i++);
        setTimeout(typist, 50); // 递归调用
      } else {
        that.setData({ splashDone: true });
      }
      that.setData({ typing: Typing });
    }
    typist();
  },
  handleShow() {
    console.log('click');
    this.setData({ showView: false });
  },
  handleNav,
};

const mapState = ({ app, data, loading }) => {
  return {
    ...app,
    ...data,
    loading,
  };
};

const mapFunc = dispatch => {
  return {
    queryData() {
      dispatch({ type: 'data/queryData' });
    },
  };
};

Page(connect(mapState, mapFunc)(page));
