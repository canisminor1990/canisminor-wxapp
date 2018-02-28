import { wx, connect } from '../../utils';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'Blog' });
    this.queryBlogToc();
  },

  pullDownRefresh: function() {
    console.log('下拉刷新....');
    this.queryBlogToc();
  },

  pullUpLoad: function() {
    this.setData({ page: this.data.page + 1 });
    console.log('上拉拉加载更多....' + this.data.page);
  },
};

const mapState = ({ app, blog, loading }) => {
  return {
    title: {
      title: "Let's talk",
      desc: 'Feel free 2 contact me 😘',
    },
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
