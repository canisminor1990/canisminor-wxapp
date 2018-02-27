import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'ProjectStory' });
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    title: {
      title: 'Sense & pixels',
      desc: 'wanna see more ? updating soon...',
    },
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
