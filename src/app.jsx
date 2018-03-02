import { join } from 'path';

const routes = [
	'Intro',
	'Blog',
	'BlogPage',
	'Projects',
	'Contact',
	'Qrcode'
];

const window = {
	navigationBarTitleText      : 'CanisMinor',
	navigationBarTextStyle      : 'black',
	backgroundTextStyle         : 'light',
	navigationBarBackgroundColor: '#fff',
};

const buildTab = name => ({
	text            : name,
	pagePath        : join('routes', name, 'index'),
	iconPath        : join('img', 'tabbar', `${name.toLowerCase()}.png`),
	selectedIconPath: join('img', 'tabbar', `${name.toLowerCase()}-active.png`)
});

const tabBar = {
	color          : '#BBBFC8',
	selectedColor  : '#222',
	borderStyle    : 'white',
	backgroundColor: '#fff',
	list           : [
		buildTab('Intro'),
		buildTab('Blog'),
		buildTab('Projects'),
		buildTab('Contact')
	]
};

const pages = [];
routes.forEach(item => pages.push(join('routes', item, 'index')));

export default {
	pages : pages,
	window: window,
	tabBar: tabBar
};