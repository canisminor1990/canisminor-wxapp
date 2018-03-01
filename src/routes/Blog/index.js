import { wx, connect, scroll } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Blog' });
    this.queryBlogToc();
  },
  onShareAppMessage() {
    return {
      title: 'CanisMinor - Blog',
      path: '/routes/Blog/index',
    };
  },
  data: {
    page: 1,
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
    show: { 0: true },
    showId: 0,
  },
  onPageScroll: scroll,
};

const mapState = ({ app, blog, loading }) => {
  return {
    ...app,
    ...blog,
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
