import { wx, connect, handleShare } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Project Story' });
    this.queryProjects();

	  const pages = getCurrentPages(); // eslint-disable-line
    const currentPage = pages[pages.length - 1]; // 获取当前页面的对象
    const url = currentPage.route; // 当前页面url
    const opt = currentPage.options; // 如果要获取url中所带的参数可以查看options

    console.log(url);
    console.log(opt);
  },
  onShareAppMessage: () => handleShare('Projects'),
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
