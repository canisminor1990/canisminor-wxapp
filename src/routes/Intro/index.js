import { wx, connect, scroll } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'CanisMinor' });
  },
  onShareAppMessage() {
    return {
      title: 'CanisMinor',
      path: '/routes/Intro/index',
    };
  },
  data: {
    title: {
      title: 'CanisMinor',
      desc: 'UI / UX Designer & FE Developer',
    },
    showView: true,
    showId: 1,
  },
  onPageScroll: scroll,
  handleShow() {
    this.setData({ showView: false });
  },
  handleDiscover() {
    wx.switchTab({ url: '/routes/Projects/index' });
  },
  handleNav() {
    wx.navigateTo({ url: '/routes/Qrcode/index?src=123' });
  },
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
