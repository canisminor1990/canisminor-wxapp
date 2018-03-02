import { wx, connect, scroll, handleShare, handleNav } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Blog' });
    this.queryBlogToc();
  },
  onShareAppMessage: () => handleShare('Blog'),
  onPageScroll: scroll,
  data: {
    page: 1,
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
    show: { 0: true },
    showId: 0,
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
