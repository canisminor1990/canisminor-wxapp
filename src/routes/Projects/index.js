import { wx, mergeOptions, connect } from '../../utils';

const page = {};

const mapState = ({ app, data, loading }) => {
  return {
    title: {
      title: 'Sense & pixels',
      desc: 'wanna see more ? updating soon...',
    },
    ...app,
    ...data,
    loading,
  };
};

Page(connect(mapState)(page));
