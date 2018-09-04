export default {
	video: 'http://qn-video.canisminor.cc/instant-zine.mp4',
	videoCover: 'http://qn-video.canisminor.cc/instant-zine.png',
	pages: book => {
		let pages = [];
		for (let i = 2; i <= 12; i++) {
			pages.push(`http://qn.canisminor.cc/zine-${book}-${i}.png`);
		}
		return pages;
	},
	cover: book => `http://qn.canisminor.cc/zine-${book}-cover.png`,
	coverLite: book => `http://qn.canisminor.cc/zine-${book}-cover-lite.png`,
	shadow: 'http://qn.canisminor.cc/zine-shadow.png',
};