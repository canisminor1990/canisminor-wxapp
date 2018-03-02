import { wx, connect, handleNav, handleShare } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Contact' });
  },
  onShareAppMessage: () => handleShare('Contact'),
  data: {
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
  },
  handleNav,
};

const mapState = ({ app, data, loading }) => {
  return {
    ...app,
    loading,
    contactData: data.contactData,
  };
};

Page(connect(mapState)(page));
