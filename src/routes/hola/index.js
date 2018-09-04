import Taro, { Component } from '@tarojs/taro';
import { View, Swiper } from '@tarojs/components';
import QueryString from 'query-string';
import { WhiteSpace, Loading, Card, TabbarShadow } from '../../components';
import './index.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import Intro from './Intro';
import Design from './Design';
import Coding from './Coding';
import Article from './Article';

@connect(({hola, loading}) => ({
	...hola,
	loading: loading.effects['hola/get']
}))
export default class extends Component {
	static defaultProps = {
		intro  : {},
		design : [],
		coding : [],
		article: [],
		loading: true
	};

	config = {
		navigationBarTitleText: 'CanisMinor'
	};

	componentDidMount = () => {
		this.props.dispatch(action('hola/get'));
	};

	navigateTo(filename) {
		const url = `/routes/post/index?id=${filename}`
		Taro.navigateTo({url});
	}

	render() {
		const {intro, design, coding, article, loading} = this.props;
		const github = QueryString.stringify({
			                                  url  : "https://github.com/canisminor1990",
			                                  title: "Github: canisminor1990"
		                                  });
		return (
			<View>
				{loading ? <Loading/> : <Swiper
					className='banner'
					indicatorColor='#999'
					indicatorActiveColor='#333'
					circular
					autoplay>
					{article.map((item, i) => {
						if (i > 4) return;
						const cover = item.cover.m ? item.cover.m : item.cover.l + '!m';
						return (
							<SwiperItem key={i} onClick={this.navigateTo.bind(this, item.filename)}>
								<Image lazyLoad src={cover} mode="widthFix"/>
							</SwiperItem>
						);
					})}
				</Swiper>
				}
				<Card title="Intro" btn="Checkout my resume" to="/routes/me/index" tab padding>
					{loading || !intro.skills ? <Loading/> : <Intro data={intro}/>}
				</Card>
				<WhiteSpace/>
				<Card title="Design" btn="View my projects" to="/routes/projects/index" tab>
					{loading ? <Loading/> : <Design data={design}/>}
				</Card>
				<WhiteSpace/>
				<Card title="Coding" btn="View my repos" to={`/routes/qrcode/index?${github}`} >
					{loading ? <Loading/> : <Coding data={coding}/>}
				</Card>
				<WhiteSpace/>
				<Card title="Article" btn="View my blog" to="/routes/blog/index" tab >
					{loading ? <Loading/> : <Article data={article}/>}
				</Card>
				<WhiteSpace/>
				<TabbarShadow/>
			</View>
		);
	}
}



