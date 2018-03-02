import { wx, connect, handleNavData, handleBack, handleShare } from '../../utils';

const page = {
  onLoad(option) {
    wx.setNavigationBarTitle({ title: 'QRCode' });
    this.setData({
      ...handleNavData(option),
      isShare: getCurrentPages().length === 1,
      src: `${this.data.api}?w=720&m=48&pt=62e6ac&text=${option.url}&logo=${this.data.logo}`,
    });
  },
  onShareAppMessage() {
    return handleShare(this.data.title);
  },
  handleBack: () => handleBack('/routes/Intro/index'),
  data: {
    api: 'http://qr.liantu.com/api.php',
    logo: 'http://qn.canisminor.cc/2018-03-02-share.png',
    title: '🔗 Link',
  },
  previewImage() {
    wx.previewImage({
      current: this.data.src,
      urls: [this.data.src],
    });
  },
};

const mapState = ({ loading }) => {
  return {
    loading,
  };
};

Page(connect(mapState)(page));
