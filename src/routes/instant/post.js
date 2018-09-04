import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { Card, Loading, Markdown } from '../../components';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import './post.scss';
import Intro from './Intro'
import Book from './Book'

@connect(({instantzine, loading}) => ({
	...instantzine,
	loading: loading.effects['instantzine/get']
}))
export default class extends Component {
	static defaultProps = {
		intro  : '',
		books  : [],
		loading: true
	};

	state = {
		type : '',
		value: 0
	};

	config = {
		navigationBarTitleText: 'Instant Zine',
		backgroundColor: '#ffffff',
	};

	componentDidMount = () => {
		this.props.dispatch(action('instantzine/get'));
		const {type, value} = this.$router.params;
		this.setState({type, value});
	};

	render() {
		const {loading, books, intro} = this.props;
		const {type, value}           = this.state;
		let book;
		if (type === 'issue') book = books[parseInt(value)];
		return (
			<View className='instant-post'>
				{loading ? <Loading/> : null}
				{(!loading && type === 'intro') ? <Intro data={intro} />: null}
				{(!loading && type === 'issue') ? <Book data={book} /> : null}

				<View className="footer">
					<Image lazyLoad className="avatar" src="https://canisminor.cc/img/canisminor.jpg" mode="widthFix"/>
					<View className="name">CanisMinor</View>
				</View>
			</View>
		);
	}
}
