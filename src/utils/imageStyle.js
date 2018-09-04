import _ from 'lodash';

export default (alt) => {
	if (!_.isString(alt)) return null;
	if (_.includes(alt, 'px')) {
		return {maxWidth: alt};
	} else if (_.includes(alt, 'rem')) {
		return {maxWidth: alt};
	} else if (_.includes(alt, '%')) {
		return {maxWidth: alt};
	} else {
		return null;
	}
}