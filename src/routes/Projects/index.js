import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Project Story' });
    this.queryProjects();
  },
  onShareAppMessage() {
    return {
      title: 'CanisMinor - Projects',
      path: '/routes/Projects/index',
    };
  },
  data: {
    title: {
      title: 'Sense & pixels',
      desc: 'wanna see more ? updating soon...',
    },
  },
};

const mapState = ({ app, projects, loading }) => {
  return {
    ...app,
    projects,
    loading,
  };
};

const mapFunc = dispatch => {
  return {
    queryProjects() {
      dispatch({ type: 'projects/queryProjects' });
    },
  };
};

Page(connect(mapState, mapFunc)(page));
