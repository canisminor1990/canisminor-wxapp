import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WhiteSpace, Loading, Card, TabbarShadow } from '../../components';
import './index.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import moment from 'moment';

@connect(({blog, loading}) => ({
	...blog,
	loading: loading.effects['blog/get']
}))
export default class extends Component {

	static defaultProps = {
		toc    : [],
		loading: true
	};

	config = {
		navigationBarTitleText: 'Blog'
	};

	componentDidMount = () => {
		this.props.dispatch(action('blog/get', 1));
	};

	onReachBottom = () => {
		if (this.props.page < this.props.pages) {
			this.props.dispatch(action('blog/get', this.props.page + 1));
		}
	};

	navigateTo(filename) {
		const url = `/routes/post/index?id=${filename}`
		Taro.navigateTo({url});
	}

	render() {
		const {toc = [], loading} = this.props;
		return (
			<View className='blog'>
				{
					toc.length > 0 ?
					toc.map((item, i) => {
						let cover;
						if (item.cover.l) {
							cover = item.cover.m ? item.cover.m : item.cover.l + '!m';
						} else {
							cover = item.cover.s;
						}
						return (
							<View className="post" key={i} onClick={this.navigateTo.bind(this, item.filename)}>
								<Card padding>
									<View className="row">
										<View className="title">{item.title}</View>
										<View className="date">{moment(item.date).format('MMM Do, YYYY')}</View>
									</View>
									<View className="desc">{item.desc}</View>
									<Image src={cover} mode="widthFix"/>
								</Card>
								<WhiteSpace/>
							</View>
						);
					}) : loading && <Loading/>
				}
				{loading && <Loading/>}
				<TabbarShadow/>
			</View>
		);
	}
}

