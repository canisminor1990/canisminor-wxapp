import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Blog' });
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
