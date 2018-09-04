import Taro, { Component, RichText } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { Loading, Card,Markdown } from '../../components';
import './index.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import moment from 'moment';

@connect(({posts, loading}) => ({
	...posts,
	loading: loading.effects['posts/get']
}))
export default class extends Component {

	static defaultProps = {
		title  : '',
		desc   : '',
		tag    : '',
		body   : '',
		cover  : {
			s: false,
			m: false,
			l: ''
		},
		date   : '',
		loading: true
	};

	config = {
		navigationBarTitleText: '',
	};

	componentDidMount = () => {
		const {id} = this.$router.params;
		this.props.dispatch(action('posts/get', id));
	};

	render() {
		const {title, desc, tag, body, cover, date, loading} = this.props;
		return (
			<View className='post'>
				{loading ? <Loading/> : (
					<View>
						<View className="header">
							<View className="title">{title}</View>
							<View className="tag">{tag.toUpperCase()}</View>
							<View className="desc">{desc}</View>
						</View>
						<Image className="cover" src={cover.l} mode="widthFix"/>
						<Card padding>
							<View className="markdown">
								<Markdown md={body}/>
							</View>
							<View className="date">{moment(date).format('MMM Do, YYYY')}</View>
						</Card>

					</View>
				)}
			</View>
		);
	}
}
