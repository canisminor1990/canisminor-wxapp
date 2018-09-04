import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { Loading, Card, WhiteSpace } from '../../components';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import Instant from '../../utils/instant';
import QueryString from 'query-string';
import './index.scss';

@connect(({instantzine, loading}) => ({
	...instantzine,
	loading: loading.effects['instantzine/get']
}))
export default class extends Component {
	static defaultProps = {
		books  : [],
		loading: true
	};

	config = {
		navigationBarTitleText: 'Instant Zine'
	};

	componentDidMount = () => {
		this.props.dispatch(action('instantzine/get'));
	};

	navigateTo(props) {
		const url = `/routes/instant/post?${props}`
		Taro.navigateTo({url});
	}

	render() {
		const {loading, books} = this.props;
		return (
			<View className='instant'>
				<Image lazyLoad className="cover" src={Instant.videoCover} mode="widthFix"/>
				<Card btn="Introduciton" to={`/routes/instant/post?type=intro`} padding>
					<View className="title">须臾映社</View>
					<View className="desc">Instant-Zine</View>
					<View className="info">24 pages / 200 x 270 mm</View>
				</Card>
				<WhiteSpace/>
				<Card title="Book List">
					<View className='list'>
						{loading ? <Loading/> : books.map((item, i) => {
							const url = QueryString.stringify({
								                                  type : 'issue',
								                                  value: i
							                                  });
							return (
								<View key={i} className="book" onClick={this.navigateTo.bind(this, url)}>
									<Image lazyLoad className="book-cover" src={Instant.coverLite(item.num)} mode="widthFix"/>
									<View className="book-title">{item.title[0]}</View>
									<View className="book-desc">{item.title[1].toUpperCase()}</View>
								</View>
							);
						})}
					</View>
				</Card>
				<WhiteSpace/>
			</View>
		);
	}
}
