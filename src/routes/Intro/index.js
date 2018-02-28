import { wx, connect } from '../../utils';
import { fill } from 'lodash';

const page = {
  onLoad() {
    wx.setNavigationBarTitle({ title: 'CanisMinor' });
  },

  data: {
    title: {
      title: 'CanisMinor',
      desc: 'UI / UX Designer & FE Developer',
    },
    showView: true,
    page: 1,
  },

  handleShow: function() {
    this.setData({ showView: false });
  },

  pullDownRefresh: function() {
    console.log('下拉刷新....');
    this.queryData();
  },

  pullUpLoad: function() {
    this.setData({ page: this.data.page + 1 });
    console.log('上拉拉加载更多....' + this.data.page);
  },
};

const mapState = ({ app, data, loading }) => {
  return {
    ...app,
    ...data,
    loading,
  };
};

const mapFunc = dispatch => {
  return {
    queryData() {
      dispatch({ type: 'data/queryData' });
    },
  };
};

Page(connect(mapState, mapFunc)(page));
