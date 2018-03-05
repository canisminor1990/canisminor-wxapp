import { usingComponents } from  '../../components';

const components = [
	'Footer',
	'Btn'
];

export default {
	disableScroll:true,
	...usingComponents(components)
};