import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'ProjectStory' });
  },
  data: {
    title: {
      title: 'Sense & pixels',
      desc: 'wanna see more ? updating soon...',
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
