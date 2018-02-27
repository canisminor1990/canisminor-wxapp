export default source => {
	let context = source.replace(/[0-9|.]+(px)/g, (m, m1) => {
		if (m === '1px') {
			return m;
		} else {
			return m.replace(m1, 'rpx');
		}
	});

	context.replace(/([0-9|.]+)rem/g, (m, m1) => `${parseFloat(m1) * 16}rpx`);

	return context;
};