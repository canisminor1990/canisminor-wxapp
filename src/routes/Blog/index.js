import { wx, connect, handleShare, handleNav } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Blog' });
    this.queryBlogToc();
  },
  onShareAppMessage: () => handleShare('Blog'),
  data: {
    page: 1,
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
  },
  handleNav,
};

const mapState = ({ app, blog, loading }) => {
  return {
    ...app,
    blogToc: blog.blogToc,
    loading,
  };
};

const mapFunc = dispatch => {
  return {
    queryBlogToc() {
      dispatch({ type: 'blog/queryBlogToc' });
    },
  };
};

Page(connect(mapState, mapFunc)(page));
