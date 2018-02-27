import { wx, mergeOptions, connect } from '../../utils';

const page = {};

const mapState = ({ app, data, loading }) => {
  return {
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
