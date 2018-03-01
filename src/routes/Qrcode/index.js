import { wx, connect } from '../../utils';

const page = {
  onLoad(option) {
    wx.setNavigationBarTitle({ title: 'Qrcode' });
    console.log(option);
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    loading,
  };
};

Page(connect(mapState)(page));
