import _ from 'lodash';

export default alt => {
  if (!alt || !_.isString(alt)) return {};
  if (_.includes(alt, 'px')) {
    return { maxWidth: alt };
  } else if (_.includes(alt, 'rem')) {
    return { maxWidth: alt };
  } else if (_.includes(alt, '%')) {
    return { maxWidth: alt };
  } else if (_.includes(alt, 'auto')) {
    return { maxWidth: '100px' };
  } else {
    return {};
  }
};
