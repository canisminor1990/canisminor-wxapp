import { wx, mergeOptions, connect } from '../../utils';

const page = {};

const mapState = ({ app, data, loading }) => {
  return {
    title: {
      title: 'CanisMinor',
      desc: 'UI / UX Designer & FE Developer',
    },
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
