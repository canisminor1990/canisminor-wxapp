import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'CanisMinor' });
  },
  handleShow: function() {
    this.setData({ showView: false });
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    showView: true,
    title: {
      title: 'CanisMinor',
      desc: 'UI / UX Designer & FE Developer',
    },
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
