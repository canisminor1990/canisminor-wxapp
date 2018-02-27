import { join } from 'path';

const routes = [
	'Intro',
	'Blog',
	'Projects',
	'Contact'
];

const window = {
	navigationBarTitleText      : 'CanisMinor',
	navigationBarTextStyle      : 'black',
	backgroundTextStyle         : 'light',
	navigationBarBackgroundColor: '#fff'
};

const buildTab = name => ({
	text            : name,
	pagePath        : join('routes', name, 'index'),
	iconPath        : join('img', 'tabbar', `${name.toLowerCase()}.png`),
	selectedIconPath: join('img', 'tabbar', `${name.toLowerCase()}-active.png`)
});

const tabBar = {
	color          : '#BBBFC8',
	selectedColor  : '#50E3C2',
	borderStyle    : 'black',
	backgroundColor: '#fff',
	list           : [
		buildTab('Intro'),
		buildTab('Blog'),
		buildTab('Projects'),
		buildTab('Contact')
	]
};

const pages = []
routes.forEach(route => pages.push(join('routes', route, 'index')));

export default {
	pages : pages,
	window: window,
	tabBar: tabBar
};