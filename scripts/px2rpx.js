export default source => source.replace(/[0-9]+(px)/g, (m, m1) => {
	if (m === '1px') {
		return m;
	} else {
		return m.replace(m1, 'rpx');
	}
});