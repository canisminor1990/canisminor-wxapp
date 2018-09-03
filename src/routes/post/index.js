import Taro, { Component,RichText } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import {Loading,Card } from '../../components';
//import WxParse from '../../components/wxParse/wxParse'
import './index.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import moment from 'moment';
import marked from 'marked';

marked.setOptions({
	                  renderer: new marked.Renderer(),
	                  gfm: true,
	                  tables: true,
	                  breaks: false,
	                  pedantic: false,
	                  sanitize: false,
	                  smartLists: true,
	                  smartypants: false,

                  });

@connect(({posts, loading}) => ({
	...posts,
	loading: loading.effects['posts/get']
}))
export default class extends Component {

	config = {
		navigationBarTitleText      : '',
	};

	componentDidMount = () => {
		const {id} = this.$router.params;
		this.props.dispatch(action('posts/get', id));
	};

	render() {
		const {title, desc, tag, body, cover, date, loading} = this.props;
		//if (!loading) WxParse.wxParse('article', 'md', body, this.$scope)
		return (
			<View className='post'>
				{loading ? <Loading /> : (
					<View>
						<View className="header">
							<View className="title">{title}</View>
							<View className="tag">{tag.toUpperCase()}</View>
							<View className="desc">{desc}</View>
						</View>
						<Image className="cover" src={cover.l} mode="widthFix" />
						<Card padding>
							<RichText className="markdown" nodes={marked(body)} />

						</Card>
						<View className="date">{moment(date).format('MMM Do, YYYY')}</View>
					</View>
				)}
			</View>
		);
	}
}

