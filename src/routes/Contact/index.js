import { wx, connect } from '../../utils';

const page = {};

const mapState = ({ data, loading }) => {
  return {
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
