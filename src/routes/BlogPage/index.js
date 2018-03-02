import { wx, connect, handleNavData, handleBack, handleShare } from '../../utils';

const page = {
  onLoad(option) {
    const data = handleNavData(option);
    wx.setNavigationBarTitle({ title: decodeURI(data.title) });
    this.queryBlogPage(data.path);
  },
  onShareAppMessage() {
    return handleShare(this.data.blogPage.title);
  },
  handleBack: () => handleBack('/routes/Blog/index'),
};

const mapState = ({ app, blog, loading }) => {
  return {
    ...app,
    loading,
    blogPage: blog.blogPage,
  };
};

const mapFunc = dispatch => {
  return {
    queryBlogPage(path) {
      if (path) dispatch({ type: 'blog/queryBlogPage', path: path });
    },
  };
};

Page(connect(mapState, mapFunc)(page));
