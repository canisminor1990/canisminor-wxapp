import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Contact' });
  },
  data: {
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
